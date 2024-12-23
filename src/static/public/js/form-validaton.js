// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0




function formData() {
    return {
        form1: {
            firstName: 'Pixy',
            lastName: 'Krovasky',
            email: 'uilib@gmail.com',
            phone: '4433222211',
            organization:'UiLib',
            departments:'Develop',
            countries:'',
            state: 'New York',
            country: '',
            address:'Corverview, Michigan',
            zipcode: '43367',
            errors: {}
        },
        form2: {
            currentPassword: '2536',
            newPassword: '2589',
            confirmPassword: '2589',
            errors: {}
        },
        form3: {
            language: '',
            timezone: '12:40 AM',
            errors: {}
        },
        form4: {
            manufacturer: '',
            model: '',
            idNumber: '',
            priority: '',
            name: '',
            metaTitle: '',
            metaTag: '',
            metaDescription: '',
            cost:'',
            price:'',
            extra:'',
            availability:'',
            errors: {}
        },
        form5: {
            name: '',
            email: '',
            phone: '',
            country: '',
            state: '',
            city: '',
            address: '',
            zipcode: '',
            about:'',
            errors: {}
        },
        form6:{
          to:'',
          from:'',
          address:'',
          address1:'',
          phone:'',  
          phone1:'',
          errors:{}
        },
        form7:{
            firstName: '',
            lastName: '',
            birthdate: '',
            email: '',
            phone: '',
            company:'',
            errors:{}
        },
        validateForm6() {
            this.form6.errors = {};

            if (!this.form6.to) this.form6.errors.to = 'To field is required';
            if (!this.form6.from) this.form6.errors.from = 'From field is required';
            if (!this.form6.address) this.form6.errors.address = 'Address field is required';
            if (!this.form6.address1) this.form6.errors.address1 = 'Address  field is required';
            if (!this.form6.phone) this.form6.errors.phone = 'Phone field is required';
            if (!/^\d{10}$/.test(this.form6.phone)) this.form6.errors.phone = 'Phone must be 10 digits';
            if (!this.form6.phone1) this.form6.errors.phone1 = 'Phone  field is required';
            if (!/^\d{10}$/.test(this.form6.phone1)) this.form6.errors.phone1 = 'Phone must be 10 digits';
        },
        validateForm5() {
            this.form5.errors = {};
            const requiredFields = ['name', 'about','email', 'phone', 'country', 'state', 'city', 'address', 'zipcode'];
            const validations = {
                email: (value) => this.validEmail(value) || 'Invalid email format.',
                phone: (value) => this.validPhone(value) || 'Phone number must be 10 digits.',
                zipcode: (value) => this.validZipcode(value) || 'Zipcode must be 5 digits.'
            };
            requiredFields.forEach(field => {
                if (!this.form5[field]) {
                    this.form5.errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
                } else if (validations[field]) {
                    const validationMessage = validations[field](this.form5[field]);
                    if (typeof validationMessage === 'string') {
                        this.form5.errors[field] = validationMessage;
                    }
                }
            });
            return Object.keys(this.form5.errors).length === 0;
        },
        validateForm7(e) {
            e.preventDefault();
            this.form7.errors = {};
            const requiredFields = ['firstName', 'lastName', 'birthdate', 'email', 'phone', 'company'];
            const validations = {
                email: (value) => this.validEmail(value) || 'Invalid email format.',
                phone: (value) => this.validPhone(value) || 'Phone number must be 10 digits.',
                // zipcode: (value) => this.validZipcode(value) || 'Zipcode must be 5 digits.'
            };
            requiredFields.forEach(field => {
                if (!this.form7[field]) {
                    this.form7.errors[field] = `${field.replace(/([a-z])([A-Z])/g, '$1 $2').charAt(0).toUpperCase() + field.replace(/([a-z])([A-Z])/g, '$1 $2').slice(1)} is required.`;
                   
                } else if (validations[field]) {
                    const validationMessage = validations[field](this.form7[field]);
                    if (typeof validationMessage === 'string') {
                        this.form7.errors[field] = validationMessage;
                    }
                }
            });
            return Object.keys(this.form7.errors).length === 0;
        },
        validEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        validPhone(phone) {
            return /^\d{10}$/.test(phone);
        },
        validZipcode(zipcode) {
            return /^\d{5}$/.test(zipcode);
        },
        validateForm1(e) {
            e.preventDefault();
            this.form1.errors = {}; // Clear previous errors
        
            const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'organization', 'departments', 'country', 'state', 'address', 'zipcode'];
            const validations = {
                email: (value) => this.validEmail(value) || 'Invalid email format.',
                phone: (value) => this.validPhone(value) || 'Phone number must be 10 digits.',
                zipcode: (value) => this.validZipcode(value) || 'Zipcode must be 5 digits.'
            };
        
            // Validate required fields
            requiredFields.forEach(field => {
                if (!this.form1[field]) {
                    // this.form1.errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
                    this.form1.errors[field] = `${field.replace(/([a-z])([A-Z])/g, '$1 $2').charAt(0).toUpperCase() + field.replace(/([a-z])([A-Z])/g, '$1 $2').slice(1)} is required.`;
                } else if (validations[field]) {
                    const validationMessage = validations[field](this.form1[field]);
                    if (typeof validationMessage === 'string') {
                        this.form1.errors[field] = validationMessage;
                    }
                }
            });
        
            return Object.keys(this.form1.errors).length === 0; // Return true if no errors
        },
        
        validEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        
        validPhone(phone) {
            return /^\d{10}$/.test(phone); // Adjust as needed for your requirements
        },
        
        validZipcode(zipcode) {
            return /^\d{5}$/.test(zipcode); // Adjust as needed for your requirements
        },
        validateForm2(e) {
            e.preventDefault();
            this.form2.errors = {};
        
            // Check if currentPassword is provided
            if (!this.form2.currentPassword) {
                this.form2.errors.currentPassword = 'Current password is required';
            }
        
            // Check if newPassword is provided
            if (!this.form2.newPassword) {
                this.form2.errors.newPassword = 'New password is required';
            } else if (this.form2.newPassword.length < 8) {
                // Check if newPassword is at least 8 characters long
                this.form2.errors.newPassword = 'New password must be at least 8 characters';
            }
        
            // Check if confirmPassword matches newPassword
            if (this.form2.newPassword !== this.form2.confirmPassword) {
                this.form2.errors.confirmPassword = 'Passwords do not match';
            }
        }, 
        validateForm3() {
            this.form3.errors = {};
            if (!this.form3.language) this.form3.errors.language = 'Language is required';
            if (!this.form3.timezone) this.form3.errors.timezone = 'Time is required';
            if (!this.form3.city) this.form3.errors.city = 'City is required';
            if (!this.form3.zipcode) this.form3.errors.zipcode = 'Zipcode is required';
        },
        validEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        validateForm4() {
            this.form4.errors = {}; // Clear previous errors

            const requiredFields = ['manufacturer', 'model', 'idNumber', 'priority', 'name', 'metaTitle', 'metaTag', 'metaDescription' , 'cost' , 'price' , 'extra' , 'availability'];
            requiredFields.forEach(field => {
                this.validateField(field);
            });

            return Object.keys(this.form4.errors).length === 0; // Return true if no errors
        },
        validateField(field) {
            if (!this.form4[field]) {
                this.form4.errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
            } else {
                delete this.form4.errors[field];
            }
        },
        resetForm1() {
            this.form1 = {
            firstName: 'Pixy',
            lastName: 'Krovasky',
            email: 'uilib@gmail.com',
            phone: '4433222211',
            organization:'UiLib',
            departments:'Develop',
            countries:'',
            state: 'New York',
            country: '',
            address:'Corverview, Michigan',
            zipcode: '43367',
                errors: {}
            };
        },
        resetForm2() {
            this.form2 = {
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
                errors: {}
            };
        },
        resetForm3() {
            this.form3 = {
                language: '',
                country: '',
                city: '',
                zipcode: '',
                errors: {}
            };
        },
        resetForm4() {
            this.form4 = {
                manufacturer: '',
                model: '',
                idNumber: '',
                priority: '',
                name: '',
                metaTitle: '',
                metaTag: '',
                metaDescription: '',
                errors: {}
            };
        },
    }
}

document.addEventListener('alpinInit', () => {  
    Alpine.data('formData', formData)
})