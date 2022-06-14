# team-10

Tech Stack: -

Front End: -
1) HTML
2) CSS
3) JavaScript
4) Bootstrap

Analysis/ Business Logic: -
1)Python 
2) NLTK
3) ScikitLearn

Backend: -
1) NodeJs
2) MongoDB

## Backend

routes;

/ : get : returns html file for file upload

/single : post :uploads a single file (only xlsx and xls)

/stakeholders : get :returns a list of all collections in the database

/searchpage : get : returns html file for searching

/search : post : 

                 accepts in body;

                 collection: name of collection to search in
                 
                 key:key string to search in the collection
                 
                 
                 returns;
                 
                 array of documents in collection, where value of any key has(not case sensitive) the substring <key>
Features: -
1) The user is provided with a feature to upload data to a centralized database
2) A NoSQL database to provide a less rigid schema
3) Advanced search and filtering features for better analysis
4) Visualization of data to provide key insights
5) Sentiment Analysis of data
6) Good UI for ease of use
