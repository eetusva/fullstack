sequenceDiagram
    participant Käyttäjä
    participant Selain
    participant Palvelin

    note over Käyttäjä,Selain: Käyttäjä kirjoittaa uuden muistiinpanon ja lähettää lomakkeen

    Selain->>Selain: JS nappaa submitin (e.preventDefault)
    Selain->>Selain: Luo uuden muistiinpanon ja päivittää domin
    Selain->>Palvelin: POST /new_note_spa (JSON-muodossa)
    Palvelin-->>Selain: 201 Created
    Selain->>Selain: Pysytään samalla sivulla (ei sivun uudelleenlatausta)
