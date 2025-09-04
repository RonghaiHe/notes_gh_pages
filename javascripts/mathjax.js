// 修复SPA导航时的MathJax重渲染问题
document$.subscribe(function() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
    }
});

// 初始加载时渲染MathJax
window.MathJax = {
    startup: {
        pageReady: () => {
            return MathJax.startup.defaultPageReady().then(() => {
                // SPA导航时重新渲染
                if (window.MaterialDocument$) {
                    window.MaterialDocument$.subscribe(function() {
                        if (window.MathJax && window.MathJax.typesetPromise) {
                            window.MathJax.typesetPromise();
                        }
                    });
                }
                return Promise.resolve();
            });
        }
    },
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        processHtmlClass: 'arithmatex'
    }
};