// Store user choices
class ChoiceManager {
    constructor() {
        const savedData = JSON.parse(localStorage.getItem('userChoices')) || {};
        this.choices = savedData.choices || {};
        this.notes = savedData.notes || '';
    }

    clearChoices() {
        this.choices = {};
        this.notes = '';
        this.saveToStorage();
        window.location.reload();
    }

    saveChoice(topic, choice) {
        this.choices[topic] = choice;
        this.saveToStorage();
    }

    saveNotes(notes) {
        this.notes = notes;
        this.saveToStorage();
    }

    getChoice(topic) {
        return this.choices[topic];
    }

    getNotes() {
        return this.notes;
    }

    getAllChoices() {
        return this.choices;
    }

    saveToStorage() {
        localStorage.setItem('userChoices', JSON.stringify({
            choices: this.choices,
            notes: this.notes
        }));
    }

    generateShareableLink() {
        const baseUrl = window.location.origin;
        const data = {
            choices: this.choices,
            notes: this.notes
        };
        const choicesParam = encodeURIComponent(JSON.stringify(data));
        return `${baseUrl}/index.html?data=${choicesParam}`;
    }
}

const choiceManager = new ChoiceManager();

// Function to update progress indicator
function updateProgress() {
    const categoryOrder = ['time', 'attire', 'cuisine', 'dessert'];
    const currentTopic = document.querySelector('main')?.dataset.topic;
    const currentIndex = categoryOrder.indexOf(currentTopic);

    // Create progress container if it doesn't exist
    let progressContainer = document.querySelector('.progress-container');
    if (!progressContainer) {
        progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        document.body.appendChild(progressContainer);

        // Create progress steps
        categoryOrder.forEach((topic, index) => {
            const step = document.createElement('div');
            step.className = 'progress-step';
            step.title = CATEGORIES[topic];
            progressContainer.appendChild(step);
        });
    }

    // Update progress steps
    const steps = progressContainer.querySelectorAll('.progress-step');
    steps.forEach((step, index) => {
        if (index < currentIndex) {
            step.classList.add('completed');
            step.classList.remove('current');
        } else if (index === currentIndex) {
            step.classList.add('current');
            step.classList.remove('completed');
        } else {
            step.classList.remove('completed', 'current');
        }
    });
}

// Function to attach event listeners to grid items
function attachGridItemListeners() {
    const gridItems = document.querySelectorAll('.grid-item');
    const topic = document.querySelector('main')?.dataset.topic;

    if (gridItems.length > 0 && topic) {
        // Restore previous selection if it exists
        const previousChoice = choiceManager.getChoice(topic);
        if (previousChoice) {
            const selectedItem = document.querySelector(`[data-choice="${previousChoice}"]`);
            selectedItem?.classList.add('selected');
        }

        // Update progress indicator
        updateProgress();

        // Handle new selections
        gridItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove previous selection
                gridItems.forEach(i => i.classList.remove('selected'));

                // Add new selection and animate
                item.classList.add('selected');
                animateCardSelection(item);

                // Save choice
                const choice = item.dataset.choice;
                choiceManager.saveChoice(topic, choice);

                // Navigate to next page after short delay
                setTimeout(() => {
                    const nextPage = item.dataset.next;
                    if (nextPage) {
                        window.location.href = nextPage;
                    }
                }, 500);
            });
        });
    }
}

// Handle page initialization
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to grid items
    attachGridItemListeners();

    // Handle share button if it exists
    const shareButton = document.querySelector('#shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', () => {
            const shareableLink = choiceManager.generateShareableLink();
            // Copy to clipboard
            navigator.clipboard.writeText(shareableLink)
                .then(() => {
                    alert('Link copied to clipboard!');
                })
                .catch(() => {
                    alert('Failed to copy link. Please try again.');
                });
        });
    }
}); 