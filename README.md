# Walking
Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се изписва "Goal reached! Good job!" и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"

<br>Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."

<br>Примерен вход и изход

| вход      | изход                     |
|-----------|---------------------------|
| (["1000", | Goal reached! Good job!   |
| "1500",   | 1000 steps over the goal! |
| "2000",   |                           |
| "6500"])  |                           |

| вход          | изход                          |
|---------------|--------------------------------|
| (["1500",     | 2500 more steps to reach goal. |
| "300",        |                                |
| "2500",       |                                |
| "3000",       |                                |
| "Going home", |                                |
| "200"])       |                                |

| вход          | изход                    |
|---------------|--------------------------|
| (["1500",     | Goal reached! Good job!  |
| "3000",       | 298 steps over the goal! |
| "250",        |                          |
| "1548",       |                          |
| "2000",       |                          |
| "Going home", |                          |
| "2000"])      |                          |

| вход     | изход                     |
|----------|---------------------------|
| (["125", | Goal reached! Good job!   |
| "250",   | 1765 steps over the goal! |
| "4000",  |                           |
| "30",    |                           |
| "2678",  |                           |
| "4682"]) |                           |
