<--------------------------------------------SURVEY------------------------------------------------------>

STEP---1

<!-- STEP--1---first login(from postmon) -->

             POST http://localhost:8080/api/v1/auth/login

             and in Body
             {
             "email":"saurav@1234",
             "password":"1234"
             }

        from this we get token for middleware verification

STEP-2

<!-- STEP--2-- GET all surveys of any particular user -->

             GET http://localhost:8080/api/v1/surveys

             IN HEADER (TOKEN)

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4

STEP-3

<!-- STEP--2-- POST surveys of any particular user -->

             POST http://localhost:8080/api/v1/surveys

             IN HEADER (TOKEN)

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4

             IN BODY
             {
                 "title": "Email Marketing Effectiveness",
                 "description": "Measure the impact of our email campaigns",
                 "questions": [
                   {
                       "id": "q1",
                     "type": "single-choice",
                     "question": "How satisfied are you with our service?",
                     "options": ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
                     "required": true
                   },
                   {
                     "id": "q2",
                     "type": "long-text",
                   "question": "What can we improve?",
                     "required": false
                   }
                 ]
               }

STEP-4

<!-- STEP--4 GET survey by ID   -->

         SURVEY-ID--68412507b3297f7c6a5caf5e
         GET http://localhost:8080/api/v1/surveys/68412507b3297f7c6a5caf5e

                      IN HEADER (TOKEN)

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4

STEP-5

<!-- STEP--5  UPDATE survey by survey id  -->

         SURVEY-ID--68412507b3297f7c6a5caf5e
         PUT http://localhost:8080/api/v1/surveys/68412507b3297f7c6a5caf5e

                        IN HEADER (TOKEN)

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4

                            IN BODY
                            {
                               "title": "Updated Survey Title",
                               "description": "Updated description goes here.",
                               "status": "active",
                               "questions": [
                                 {
                                   "id": "q1",
                                   "type": "single-choice",
                                   "question": "How do you rate our new website?",
                                   "options": ["Excellent", "Good", "Average", "Poor"],
                                   "required": true
                                 }
                               ]
                             }

STEP-6

<!-- STEP--6  DELETE survey by survey id  -->

         SURVEY-ID--68412507b3297f7c6a5caf5e
         DELETE http://localhost:8080/api/v1/surveys/68412507b3297f7c6a5caf5e

                         IN HEADER (TOKEN)

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4

STEP-7

<!-- STEP--7  PUBLISH survey by survey id  -->

           SURVEY-ID--68412507b3297f7c6a5caf5e
           POST http://localhost:8080/api/v1/surveys/68412507b3297f7c6a5caf5e

                         IN HEADER (TOKEN)

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4


<--------------------------------------------SURVEY RESPONSES------------------------------------------------------>

To get all the active surveys of any particular user

STEP---1

<!-- STEP--1---first login(from postmon) -->

             POST http://localhost:8080/api/v1/auth/login

             and in Body
             {
             "email":"saurav@1234",
             "password":"1234"
             }

STEP-2

<!-- Step-2---- now get all ACTIVE surveys -->

          with user id make get call to get all active surveys of user

          GET http://localhost:8080/api/v1/surveys/68408507dfb76e87993112ef/public

STEP-3

<!-- Step-3 --- now post response of any particular survey from the list of ACTIVE surveys -->

     with survey id make a post call to post responses and respondant details

     survey-id---->68412507b3297f7c6a5caf5e

      POST http://localhost:8080/api/v1/surveys/68412507b3297f7c6a5caf5e/responses

      in BODY

                      {
                      "respondent": {
                      "email": "satyam@e1234",
                      "name": "satyam"
                      },
                      "answers": [
                      {
                      "questionId": "q1",
                      "answer": "Very Satisfied"
                      },
                      {
                      "questionId": "q2",
                      "answer": "Improve delivery speed."
                      }
                      ]
                      }

STEP-4

<!-- Step-4 --- To GET all responses of any particular survey -->

             survey-id---->684134a922c9856a6c046cd7

             GET http://localhost:8080/api/v1/surveys/684134a922c9856a6c046cd7/responses

             IN HEADER (TOKEN)

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4

<--------------------------------------------RESPONDANT------------------------------------------------------>

STEP--1

<!-- STEP--1---first login(from postmon) -->

             POST http://localhost:8080/api/v1/auth/login

             and in Body
             {
             "email":"saurav@1234",
             "password":"1234"
             }

STEP-2

<!-- STEP--1 TO GET all all the respondant of any particular user -->

    GET http://localhost:8080/api/v1/respondents

             IN HEADER (TOKEN) u get token when u login

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4

STEP-3

<!-- STEP-3 TO GET info of any particular respondant  -->

RESPONDANT ID --68425c24c11c6be97610da44
GET http://localhost:8080/api/v1/respondents/68425c24c11c6be97610da44

               IN HEADER (TOKEN) u get token when u login

                        Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                eyJpZCI6IjY4NDA4NTA3ZGZiNzZlODc5OTMxMTJlZiIsIm5hbWUiOiJzYXVyYXYiLCJlbWFpbCI6InNhdXJhdkAxMjM0IiwiaWF0IjoxNzQ5MDk5NTY2LCJleHAiOjE3NDkxODU5NjZ9.DKyewrx_qqVj-xJc-nZjydIG-MiWN2iQLOEPojwDLa4
