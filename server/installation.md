Ftiakste virtual enviroment ston fakelo **server**:

```
$ pip3 install virtualenv
$ virtualenv .env
$ source .env/bin/activate
```

Egkatasthste ta modules 

```
$ pip3 install -r requirements.txt
```

Ftiakste postgres db me name: "sign_me_up"

Den xreiazetai na treksete kanena query gia na dimiourghthoun ta tables sth vash. Ta ftiaxnei automata to djando
trexontas ta parakatw
```
$ python3 manage.py makemigrations
$ python3 manage.py migrate
```


Gia na treksei o django server se localhost (antistoixa me ton express server) trekste:
```
python3 manage.py runserver 
```