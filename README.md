# jam

```bash
git clone git@github.com:kk6/jam.git
cd jam/
vim backend/web-back/.env
vim backend/web-back/config/local_settings.py
```

`.env` と `local_settings.py` は clone 後に作る。

`.env` の例

```
SECRET_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
DEBUG=False
```

`SECRET_KEY` は python shell で生成してもいいし、めんどくさかったら [Django 秘密鍵ジェネレーター](https://miniwebtool.com/ja/django-secret-key-generator/) で生成するのが楽かも。

`local_settings.py` の例

```python
from .settings import *

DEBUG = True

ALLOWED_HOSTS = ["*"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "jam",
        "USER": "user",
        "PASSWORD": "password",
        "HOST": "db",
        "PORT": "3306",
    }
}
```

ここまで準備できたら docker-compose でビルドする。

```bash
docker-compose up --build
```

[localhost:8080](http://localhost:8080)にアクセスできるようになっているはず。
