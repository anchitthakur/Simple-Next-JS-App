import fetch from 'isomorphic-unfetch'

const Fetcher = function(page){
    var data = new Promise(function(resolve,reject){
        console.log("starting")
        var url = 'https://newsapi.org/v2/everything?' +
            'q=tech&' +
            'sortBy=popularity&' +
            'page=' + page + '&' +
            'pageSize=5&' +
            'apiKey=3b214239993247f18926b8fab6ee014f';
        fetch(url).then(response => response.json())
            .then(json => {
                //console.log(json)
                resolve(json);
            })
    })
    
    return data;

}

export default Fetcher;