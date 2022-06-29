# Endpoints

## Patient

- `GET /api/patients`

```json
[
  {
    "id": 2,
    "nom": "nom",
    "prenom": "prenom",
    "email": "email",
    "password": "password",
    "suivis": [],
    "cin": "cin",
    "date_naissance": "date_naissance",
    "sexe": "",
    "tel": "",
    "doctors": []
  }
]
```

- `GET /api/patients/{id}`

```json
{
  "id": 2,
  "nom": "nom",
  "prenom": "prenom",
  "email": "email",
  "password": "password",
  "suivis": [],
  "cin": "cin",
  "date_naissance": "date_naissance",
  "sexe": "",
  "tel": "",
  "doctors": []
}
```

- `POST /api/patients`
    - **Body**

```json
{
  "nom": "Jonas",
  "prenom": "prdazda",
  "email": "email",
  "password": "password",
  "cin": "cin",
  "date_naissance": "date_naissance",
  "sexe": "",
  "tel": ""
}
```

- `PUT /api/patients/{id}`
    - **Body**

```json
{
  "nom": "jonas",
  "prenom": "jonas",
  "email": "email@jonas",
  "password": "password",
  "suivis": [],
  "cin": "cin",
  "date_naissance": "date_naissance",
  "sexe": "",
  "tel": "",
  "doctors": []
}
```

- `DELETE /api/patients/{id}`
- `GET /api/patients/{id}/suivis` // liste des suivis du patient with id *{id}*

```json
[
  {
    "id": 1,
    "titre": "Titre",
    "stress": "Stress",
    "tristesse": "Tristesse",
    "joie": "Joie",
    "sommeil": "Sommeil"
  }
]
```

- `GET /api/patients/{id}/doctors` // Liste des docteurs du patient with id *{id}*

```json
[
  {
    "email": "joa",
    "nom": "dazdaz",
    "prenom": "feafafa",
    "password": "dadaz",
    "tel": "091313",
    "specialite": "faefafeafa",
    "cin": "dadzda"
  }
]
```

## Suivi

- `GET /api/suivis/{id}`
- `POST /api/suivis`
- `PUT /api/suivis/{id}`
- `DELETE /api/suivis/{id}`