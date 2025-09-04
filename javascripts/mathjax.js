document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
});

window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
    },
    options: {
        renderActions: {
            findScript: [10, function () {
                // Find and process scripts
            }, '']
        }
    }
};