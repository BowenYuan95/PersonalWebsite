const pageHead = `
    <div class = "container" >
        <div id = "header" class="wrapper">
            <div id = "head-inner" class= "inner">
                <a href = "../index.html" class="title">Bowen's Blog</a>
                <nav class = "naviBar">
                    <a class = "navi-link" href = "../index.html">HomePage</a>
                    <a class = "navi-link" href = "../Navigation.html">Navigation</a>
                    <a class = "navi-link" href = "../AboutMe.html" >About Me</a>
                </nav>
            </div>
        </div>
    </div>
`;

const head = document.querySelector(".blogHead");

head.innerHTML = pageHead;
