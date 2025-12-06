from js import document
import micropip
micropip.install("requests")
import requests

wlbl = document.getElementById("lbl_wait")

link = "NONE"

try:
    response = requests.get(pastebin_raw_link)
    response.raise_for_status()
    link = response.text

except requests.exceptions.RequestException as e:
    wlbl.innerHTML = f"Error contacting host: {e}"

wlbl.innerHTML = f"Error contacting host: {e}"

