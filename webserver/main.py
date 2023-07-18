import store
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get('/')
def get_list():
    return [1,2,3]

@app.get('/about', response_class=HTMLResponse)
def get_list():
    return """
        <h1>Contact Page</h1>
        <p>Parraph first</p>
    """

def run():
    store.get_categories()

if __name__ == '__main__':
    run()