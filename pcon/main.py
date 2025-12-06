from js import document
import requests

wlbl = document.getElementById("lbl_wait")

link = ""

try:
    response = requests.get("https://raw.githubusercontent.com/UnfullStack/UnfullStack.github.io/refs/heads/main/pcon/HOST.txt")
    response.raise_for_status()
    link = response.text

except requests.exceptions.RequestException as e:
    wlbl.innerHTML = f"Error contacting host: {e}"

wlbl.innerHTML = f"Found host: {link}"


