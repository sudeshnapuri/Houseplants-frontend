# Software Core Fundamental Project - HOUSE PLANT REGISTER PROJECT
Sudeshna Puri

The objective of this Fundamental project was to create a CRUD application using the methodologies and technologies that encapsulate all fundamental modules covered during training. This includes Project Management, Databases, Java SE, Spring Boot, Front-End Development, Automated Testing, Agile & Project Management. I decided to create a Houseplant Register as I thought it would be good to have an app to keep track of my plants and their water, humidity and sunlight demands. It is also useful to keep track of how many of the same plants I own.

The tech stack required:

For Project management, a Jira board was created with user stories, use cases and tasks needed to complete the project. I seperated MustHave tasks into Sprint 1 and ShouldHave tasks into Sprint 2.

I used SQL Server to create a relational database used to store data persistently for the project. I also used a default H2 database for testing.

The programming language used was Java, I used the integrated development environment Eclipse to create an integrated API using Spring Boot. A functional application was created in OOP language which met the requirements of JIRA board.
 
I used integration testing using MockMVC to meet an acceptable level of test coverage in my backend for validation of the application.

For the front-end, I used HTML, CSS and JavaScript to create a functioning front end. I also used Bootstrap to style my front-end. 

I used GitHub for versioning (https://github.com/).

JIRA board: https://sudeshnapuri.atlassian.net/jira/software/projects/HPS/boards/2

Google Slides Presentation: https://1drv.ms/p/s!AtmxmIFB_gGjhjEe4Zpi_FoM2OCU?e=svMMSi

# Planning Resources
Firstly, I created a JIRA board to break down tasks into user stories and acceptance criteria. Then I created some epics so I could organise my tasks. I tried to make the tasks as small and specific as possible. I then created the Sprint with the goal of "To create a Minimum Viable Product (Houseplant Register) and Test with 70% coverage or Test of all the methods atleast". 

![image](https://user-images.githubusercontent.com/93253004/146407972-db281a46-5d53-4a61-93e5-599a72a8f80d.png)
![image](https://user-images.githubusercontent.com/93253004/146408031-d0f19203-625b-49a2-b638-8ae9422a14ac.png)

I then used Paint online to roughly design my front-end with the MustHave features (I was also able to add two ShouldHave features which are not on the original design).

![image](https://user-images.githubusercontent.com/93253004/146436225-ebc8932b-ec70-4da0-bee2-e1823aacba0b.png)

I also set up two Git repositories, one for the front-end and one for the back-end. I used the feature branch model for both repositories but my main branch got detached from my develop branch so will keep this in mind for next project. I was able to make smart commits throughout the project as I linked my git with my jira board.

front-end:
![image](https://user-images.githubusercontent.com/93253004/146408448-cf38faf7-c4a1-4eb9-a92c-f62acf1fa44e.png)
back end:
![image](https://user-images.githubusercontent.com/93253004/146408572-b4348907-e782-4e04-bff7-5db6031442e0.png)


# Databases
I used MySQL Workbench database for storing the data from the application, as well as displaying the data from the database onto the front-end.

![image](https://user-images.githubusercontent.com/93253004/146408694-0a838df2-44a5-4f8d-98d0-1c1acf44c64e.png)

I used a default H2 database for testing as it doesn't store any data. The database was set up using the application.properties file, houseplant-schema.sql and houseplant-data.sql files to create and drop the table containing specified records before each test.

# Back-end
The back-end of this project was created using Java and SpringBoot on Eclipse. I created a domain class (contains properties of my plants), repository class (which handles persistence), a service interface and servicedb class (which contained all business logic) and a controller (enables the request mappings). I generated a ULM to display these classes and their relationships. Along with the MustHave requirements from my JIRA board, I also managed to add two ShouldHave requirements to the back-end.

![image](https://user-images.githubusercontent.com/93253004/146408855-4c5f0225-122c-40b7-afe0-2d418bf9bd9a.png)

# Testing
I used Postman to mock the front-end to test my methods to make sure they were working. I then made sure to switch to the test application.properties and completed Integration Testing using MockMVC to test the controller, service and repository classes. I managed to get a coverage of 77.5%.

![image](https://user-images.githubusercontent.com/93253004/146409067-f7e3bb26-675b-49ac-849f-0ccb777b0177.png)
![image](https://user-images.githubusercontent.com/93253004/146409170-ef1359f9-a9e4-434f-a037-491a7ae6d38c.png)

# Front-end
I created the front-end using HTML, CSS and JavaScript and also used Bootstrap for styling. I tried to match my website design to the rough design I created at the start of the project but also managed to add in some more features such as the scroll bar and shadows to the cards etc. The front-end doesn't look amazing but it is clearly laid out and full functioning for a minimum viable product. I was also able to make the screen responsive so it is clear on a small screen also. I used Javascript and Axios to create HTTP requests for the API integration. We converted our data to JSON and used status codes when writing HTTP requests inorder to build a RESTFUL API.

![image](https://user-images.githubusercontent.com/93253004/146409467-d1f650eb-23fc-460a-a96b-60cec5891071.png)

# Continued Development
I could have definitely improved on the styling of the front-end, including adding pictures and improving the layout of the application. I could have utilised Bootstap more, eg. modals etc. to make the update plants bit clearer and also added pop-ups to let the user know that the plant has been deleted, updated or addedd successfully. I could have also added more feature such as Find By Sunlight Demand, Water Demand and also changed the text field entry to a drop down entry so users can only select Low, Medium or High for the demands.


