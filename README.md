# NTUWIT-Hackathon

>Women-In_Tech Hackathon \
Nanyang Technological Unviersity \
Team Hardcoders 

## Our Team
| Name| Github ID |
|---|---|
| Lim En Jia | [@enjiaaaa](https://github.com/enjiaaaa) |
| Lee Jia Rong | [@CLJRR](https://github.com/CLJRR) |
| Ethan Yew | [@eyyt2309](https://github.com/eyyt2309) |
| Harikrishnan Vinod | [@harikrishnanvinod](https://github.com/harikrishnan-vinod) |
| Raja Muthu | [@mu7hu](https://github.com/mu7hu) |


# Project Setup Guide

## Frontend Setup
To set up and run the frontend, execute the following commands in the terminal:

```sh
cd frontend
npm install
npm run dev
```

## Backend Setup
To set up an run the backend, excute the following commands in a new terminal, seperate from the terminal used to run the backend:

**1. First we need to make sure the dependencies for the AI part is installed:**

1.1 Make a virtual environment

*For Windows*
```sh
python -m venv venv
.\venv\Scripts\activate
pip install -r aipart/requirements.txt
```

*For Mac/Linux*
```sh
python -m venv venv
source venv/bin/activate
pip install -r aipart/requirements.txt
```

1.2 Enter API key for Perplexity API
Go to backend\controller\ai.py file and enter API key in the variable named ***API_KEY***

**2. Run Backend**
```sh
cd backend
python app.py
```




