sequenceDiagram
    participant browser
    participant server

    Note right of browser: Käyttäjä kirjoittaa tekstikenttään ja painaa tallenna

    browser->>browser: Javascript estää lomakkeen toiminnan (page reload)
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: Pyyntö sisältää uuden muistiinpanon datan lomakkeen muodossa
    server-->>browser: HTTP 302 Redirect (uudelleenohjaus /notes-sivulle)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML dokumentti-tiedosto
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css-tiedosto
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: javascript-tiedosto
    deactivate server

    Note right of browser: Selain suorittaa javascript-koodin, joka hakee JSON-datan suoraan palvelimelta.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON-tiedosto tuodaan takaisin selaimelle, joka sisältää uuden muistiinpanon
    deactivate server

    Note right of browser: Selain huomioi muistiinpanot uudelleen uuden datan pohjalta.
