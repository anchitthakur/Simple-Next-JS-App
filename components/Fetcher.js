import fetch from 'isomorphic-unfetch'

const Fetcher = function(page,search){
    var data = new Promise(function(resolve){
        console.log("starting")
        var url = 'https://newsapi.org/v2/everything?' +
            'q='+search+'&' +
            'sortBy=publishedAt&' +
            'page=' + page + '&' +
            'pageSize=5&language=en&' +
            'apiKey=3b214239993247f18926b8fab6ee014f';
        fetch(url).then(response => response.json())
            .then(json => {
                console.log(json)
                resolve(json);
            })
    })
    
    return data;

}

export default Fetcher;