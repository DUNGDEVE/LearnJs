let xhr = new XMLHttpRequest();
let url = './health_article.json';
xhr.open('GET',url,true);
xhr.responseType = 'json'

xhr.onload = function(){
    let articles = xhr.response.articles;
    let articlesDiv = document.getElementById('articles');

    articles.forEach(function(article){
        let articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        let title = document.createElement('h2');
        title.textContent = article.title;
        
        let description = document.createElement('p');
        description.textContent = article.description;

        let waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:'

        let waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way){
            let listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem)
        });

        let benefitHeader = document.createElement('h3');
        benefitHeader.textContent = 'Benefits';

        let benefitList = document.createElement('ul');
        article.benefits.forEach(function(benefit){
            let benefitItem = document.createElement('li');
            benefitItem.textContent = benefit;
            benefitList.appendChild(benefitItem);
        })
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitHeader);
        articleDiv.appendChild(benefitList);
        articlesDiv.appendChild(articleDiv);

    });


}
xhr.send();