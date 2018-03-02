
# Pane & Olio

---
Pane & Olio is the ultimate cooking app.
* Recipe search
* Cookbook
* Ingredients substitutes
* Fill your grocery list and send it by text or mail
* Retrieve the list of closest grocery stores
* Social authentication

---
##### Background

Pane & Olio is the 4th project as student at General Assembly 

---
#### Goals

The purpose of this project is to apply and integrating all the knowledge, tools and techniques learned during the Web Development Intensive program.

---

#### Use Pane & Olio

https://pane-and-olio.herokuapp.com

---
#### Specifics
The application's architecture solve the following probelms:

**Authentication:** The authentication system is managed by a third party API "auth0" holding its own remote database, the first challenge was integrating the local MongoDB database and keep it constantly synchronized with authentication actions.

**Data retrieving:** The database stores only the necessary references to effectively retrieve the correct data from the Food API. The challenge was relating the stored references and the user preferences with the incoming data and display accordingly.

**Visualization:** The front-end was built with React-JS allowing the separation of concern for every specific component. The challenge was integrating the user interaction, the data store in the database and the data incoming from the external API in a cycle of Interaction > Fetching > Storing > Returning > Display. Every active component communicates both with the API and the DB allowing the user to interact with the retrieved data and retain those data making it available later.

This structure will also allow me to implement more effectively the Stage 2 of this project: having a Google Home device triggering action in specifics component through informations send to the server by a JSON file.

---


* **Front end:** React.js
* **Server:** Node.js + Express.js
* **Database:** MongoDB + Mongoose
* **Cloud Environment:** HerokuApp
---
#### Project Material
###### Project Management
[Trello](https://trello.com/b/mpduFWR7)

###### ERD
[Picture](https://i.imgur.com/A1xxqCx.png)

###### WireFrame
Realized with Balsamiq
[Picture](https://i.imgur.com/S8ODilN.png)

---
#### Resources
[Food API](https://spoonacular.com/food-api)

[Google Places API](https://developers.google.com/places/web-service/)

[Twilio SMS API](https://www.twilio.com/)

[Auth0 Authentication](https://auth0.com/)


---
#### Libraries
CSS : [Styled-Components](https://www.styled-components.com/)

Symbols : [React-Icons](https://gorangajic.github.io/react-icons/fa.html)

Email : [Nodemailer](https://nodemailer.com/about/)

JS enhancer : [Loadash](https://lodash.com/)

Alert messages : [React-alert](https://github.com/schiehll/react-alert)




