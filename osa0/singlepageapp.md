sequenceDiagram
    participant Käyttäjä
    participant Selain
    participant Palvelin

    Käyttäjä->>Selain: Avaa https://studies.cs.helsinki.fi/exampleapp/spa
    Selain->>Palvelin: GET /exampleapp/spa
    Palvelin-->>Selain: HTML-sivu (index.html) selaimelle
    Selain->>Palvelin: GET /main.css
    Palvelin-->>Selain: CSS-tiedosto selaimelle
    Selain->>Palvelin: GET /spa.js
    Palvelin-->>Selain: JavaScript-tiedosto selaimelle
    Selain->>Palvelin: GET /data.json (AJAX/fetch)
    Palvelin-->>Selain: JSON-muodossa olevat muistiinpanot selaimelle
    Selain->>Selain: JavaScript renderöi muistiinpanot domiin

    note over Käyttäjä,Selain: Käyttäjä kirjoittaa ja lähettää uuden muistiinpanon

    Selain->>Selain: JS käsittelee submitin
    Selain->>Selain: Luo uusi muistiinpano ja päivittää domin
    Selain->>Palvelin: POST /new_note_spa (JSON-muodossa)
    Palvelin-->>Selain: 201 Created
    Selain->>Selain: Pysytään samalla sivulla (ei uudelleenlatausta)
