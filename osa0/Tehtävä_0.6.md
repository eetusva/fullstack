Tehtävä 0.6:  Tee kaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon 
sivulla https://studies.cs.helsinki.fi/exampleapp/new_note_spa 

sequenceDiagram:
    1. participant:
    browser
    2. participant:
    server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status code 201 created
    deactivate server
    
    
    

