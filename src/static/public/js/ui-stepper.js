// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



function stepper() {
    return {
        currentStep: 0,
        steps: [0, 1, 2], // Track step indices
        stepSuccess: [false, false, false], // Track success state
        finishModal: false,
        init() {
            // Initialize stepper state if needed
        },

        nextStep() {
            if (this.currentStep <= this.steps.length - 1) {
                this.stepSuccess[this.currentStep] = true; // Mark the current step as completed
                this.currentStep++;
            }
        },

        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
                this.updateStepSuccess(); // Update stepSuccess when moving back
            }
        },
        reset() {
            this.currentStep = 0,
                this.steps = [0, 1, 2], // Track step indices
                this.stepSuccess = [false, false, false], // Track success state
                this.finishModal = false
        },
        updateStepSuccess() {
            // Reset success state for steps that are not the current step
            this.stepSuccess = this.stepSuccess.map((success, index) => {
                return index <= this.currentStep ? true : false;
            });

        }
    }
}