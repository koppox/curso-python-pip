# Steps

# app Project

```sh
git clone
cd app
python3 -m venv env
source env/bin/activate
pip3 install -r requirements.txt
python3 main.py
```

# Web Server
```sh
cd webserver
python -m venv env
source env/bin/activate
pip3 install fastapi
pip3 install "uvicorn[standard]"
pip3 freeze > requirements.txt
pip install -r requirements.txt

```