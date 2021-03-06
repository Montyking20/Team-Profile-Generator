const templateHelper= (html) => {
    const fullPage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="header">
        <h1>The Team</h1>
        </header>
        <main class="container"style="margin-right: 45pt; margin-top: 30pt;">
        <div class="row row-cols-1 row-cols-md-3 g-4" style="vertical-align: middle; ; justify-content: center;">
            ${html}
   
    </main>
   
    <!-- Footer -->
    <footer class="footer">
        <h2>Made with ❤️️ by JAWS</h2>
        <p>&copy; 2021 JAWS Services, Inc.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        </body>
    </html>`
    return fullPage
} 


module.exports = templateHelper;