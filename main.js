var app = new Vue({
    el: '#app',
    data: {
        buttonClicked: false,
        inputString: "",
    },

    methods: {
        splitArray: function(inputString) {
            console.log("split array: " + inputString);
            return inputString.split('');
        },
    }
});