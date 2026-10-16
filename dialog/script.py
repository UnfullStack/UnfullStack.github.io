#from pyscript import document

def update():
    inp = "Mark|hey its me mark\nwait|1\nMatt|hey its me matt wow"#document.querySelector("#txt").value
    fstr = ""
    pyd = []
    
    i = 0
    
    lines = inp.split("\n")
    for line in lines:
        div = line.split("|")
        speaker = div[0]
        text = div[1]
        if speaker != "wait":
            pyd.append([
                "speaker",
                speaker
            ])
            pyd.append([
                "vis",
                speaker
            ])
            if i == 0:
                pyd.append([
                    "vtravel",
                    "DEFAULT_HEIGHT",
                    1
                ])
                pyd.append([
                    "wait",
                    1,
                ])
            pyd.append([
                "write",
                text
            ])
        else:
            pyd.append([
                "wait",
                float(text),
            ])
            
        if i == len(lines)-1:
            pyd.append([
                "vtravel",
                "LOWER_HEIGHT",
                1,
            ])
            pyd.append([
                "wait",
                1
            ])
            pyd.append(["end"])
            
        i+=1
        
    fstr = str(pyd)
    fstr = fstr.replace("[","{").replace("]","}")
    fstr = fstr.replace("'DEFAULT_HEIGHT'","DEFAULT_HEIGHT")
    fstr = fstr.replace("'LOWER_HEIGHT'","LOWER_HEIGHT")
    
    print(fstr)#document.querySelector("#out").innerText = fstr

update()