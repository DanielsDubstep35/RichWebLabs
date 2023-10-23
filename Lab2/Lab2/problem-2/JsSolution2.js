fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        json.map(element => {
            // // Problem 1: List all of the post titles having more than six words
            // if (element["title"].split('\n').join(' ').split(' ').length > 6) {
            //     console.log(element)
            // }

            // Problem 2: Show a word frequency map for all of the body contents of the posts
            var jsonArrays = element["body"].split('\n').join(' ').split(' ')
            var wordCounter = {}
            jsonArrays.map(word => {
                if (!wordCounter[word]) {
                    wordCounter[word] = 0
                }
                wordCounter[word]++
            })
            console.log(wordCounter)
        })
    })
