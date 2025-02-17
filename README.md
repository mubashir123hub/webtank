<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEBTANK - Your Digital Universe</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

        /* Custom Scrollbar */
        ::selection {
    background: linear-gradient(90deg, #00ffcc, #ff00f2);
    color: #7006c7f5;
    text-shadow: 0 0 13px rgba(4, 96, 182, 0.952);
}

::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
    background: rgba(6, 241, 65, 0.1);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #00ffcc, #007bff);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #007bff, #00ffcc);
}
html {
    scroll-behavior:inherit ;
}

        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1e1e2f, #2a2a40);
            color: #fff;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 50px auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            text-align: center;
        }

        h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 3rem;
            margin-bottom: 20px;
            background: linear-gradient(90deg, #00ffcc, #007bff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: glow 2s infinite alternate;
        }

        @keyframes glow {
            0% {
                text-shadow: 0 0 10px #00ffcc, 0 0 20px #007bff;
            }

            100% {
                text-shadow: 0 0 20px #007bff, 0 0 40px #00ffcc;
            }
        }

        input[type="text"] {
            width: 70%;
            padding: 15px;
            margin: 10px 0;
            border: 2px solid #00ffcc;
            border-radius: 30px;
            font-size: 16px;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            outline: none;
            transition: border-color 0.3s;
        }

        input[type="text"]:focus {
            border-color: #007bff;
        }

        button {
            padding: 15px 30px;
            cursor: pointer;
            background: linear-gradient(90deg, #00ffcc, #007bff);
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 16px;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 20px 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        li {
            margin: 10px 20px;
        }

        a {
            text-decoration: none;
            color: #00ffcc;
            font-weight: bold;
            font-size: 1.1rem;
            transition: color 0.3s, transform 0.3s;
        }

        a:hover {
            color: #007bff;
            transform: translateY(-5px);
        }

        .section {
            max-width: 1200px;
            margin: 30px auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }

        .section h2 {
            font-family: 'Orbitron', sans-serif;
            font-size: 2rem;
            margin-bottom: 15px;
            color: #00ffcc;
        }

        .section p {
            font-size: 1.1rem;
            color: #ccc;
        }

        footer {
            margin-top: 50px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            text-align: center;
            font-size: 14px;
            border-radius: 15px 15px 0 0;
        }

        footer a {
            color: #00ffcc;
            text-decoration: none;
            transition: color 0.3s;
        }

        footer a:hover {
            color: #007bff;
        }

        .logo {
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-10px);
            }
        }

        .hidden {
            display: none;
        }
    </style>
</head>

<body>
    <a href="index1.html">
        <img src="logo.png" alt="WEBTANK Logo" class="logo" width="150">
    </a>

    <div class="container">
        <h1>WEBTANK</h1>
        <input type="text" id="searchInput" placeholder="Search for software, games, etc...">
        <button onclick="performSearch()">Search</button>
        <p>Browse categories:</p>
        <ul>
            <li><a href="software/index.html">Software</a></li>
            <li><a href="games/index.html">Games</a></li>
            <li><a href="ebook/index.html">E-books</a></li>
            <li><a href="movi/index.html">Movies</a></li>
            <li><a href="music/index.html">Music</a></li>
            <li><a href="news/index.html">News</a></li>
            <li><a href="news/index.html">News</a></li>
        </ul>
    </div>

    <div class="section" data-search="software">
        <h2>Software </h2>
        <p>Explore a variety of software applications.</p>
        <ul>
            <li><a href="software/antivirus/index.html">Antivirus</a></li>
            <li><a href="software/office/index.html">Office Tools</a></li>
            <li><a href="software/media/index.html">Media Players</a></li>
            <li><a href="software/dev/index.html">Development Tools</a></li>
        </ul>
    </div>

    <div class="section" data-search="games">
        <h2>Games </h2>
        <p>Find the best games for different platforms.</p>
        <ul>
            <li><a href="games/pc/index.html">PC Games</a></li>
            <li><a href="games/mobile/index.html">Mobile Games</a></li>
            <li><a href="games/console/index.html">Console Games</a></li>
        </ul>
    </div>

    <div class="section" data-search="movies music">
        <h2>Movies </h2>
        <p>Enjoy the latest movies and music collections.</p>
        <ul>
            <li><a href="movi/latest/index.html">Latest Movies</a></li>
            <li><a href="movi/TAP/index.html">Top Albums</a></li>
            <li><a href="movi/stb/index.html">Soundtracks</a></li>
        </ul>
    </div>

    <div class="section" data-search="ebooks books">
        <h2>E-books </h2>
        <p>Find a wide range of digital books.</p>
        <ul>
            <li><a href="ebook/f/index.html">Fiction</a></li>
            <li><a href="ebook/n-f/index.html">Non-fiction</a></li>
            <li><a href="ebook/edu/index.html">Educational</a></li>
        </ul>
    </div>

    <div class="section" data-search="news updates">
        <h2>News </h2>
        <p>Stay updated with the latest news.</p>
        <ul>
            <li><a href="news/tec/index.html">Technology</a></li>
            <li><a href="news/entertainment/index">Entertainment</a></li>
            <li><a href="news/wn/index.html">World News</a></li>
        </ul>
    </div>

    <footer>
        &copy; 2025 WEBTANK. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
    </footer>

    <script>
        function performSearch() {
            const query = document.getElementById("searchInput").value.toLowerCase();
            const sections = document.querySelectorAll(".section");

            if (!query) {
                alert("Please enter a search term.");
                return;
            }

            sections.forEach(section => {
                const searchableText = section.getAttribute("data-search").toLowerCase();
                if (searchableText.includes(query)) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });
        }

        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("searchInput").addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    performSearch();
                }
            });
        });
    </script>
</body>

</html>
