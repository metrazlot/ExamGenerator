Task Generator
===========

Генератор экзаменационных билетов на базе MikTex и Python.

Возможности
----------
- Написание вопросов, используя среду MikTex.
- Генерация PDF и HTML версий экзаменационных билетов.
- Генерация ответов.
- Параметризация вопросов и ответов.
- Генерация множества рандомизированных вариантов билетов.

Установка
----------

Впервую очередь нужно установить MikTex и PythonTex. Затем:

```python
pip install taskgen
```

P.S. Данный пакет в репозитории pip последний раз обновлялся 11 мая 2022 г.
Актуальная версия находится на GitHub, поэтому устанавливать пакет стоит путём прямого клонирования данного репозитория.

Использование
----------
Автор рекомендует использовать Jupyter Notebook.

```python
from taskgen import *
from taskgen.generator import *
from taskgen.html2pdf import *

# начало нумерации билетов
start_numeration = 100
# кол-во генерируемых вариантов
variant_count = 1
# детерминированная генерация билетов
deterministic = True

%%time
generate_exam(start_numeration, variant_count, deterministic)
```

Другие команды
----------
```python
# создать один вариант в формате .tex
gen_variant(variant_number = 1, deterministic = True, task_number_for_deterministic=0)
```
```python
# cкомпилировать шаблон на базе PythonTex из формата tex в html
compile_file(filename = 'Q3', folder = './QUESTIONS/Q3/')
```
```python
# конвертировать все html файлы из папки в pdf
html2pdf(os.path.join(os.getcwd(), 'RESULTS', 'html', 'only_problems'), \
             os.path.join(os.getcwd(), 'RESULTS', 'pdf', 'only_problems'), in_one_page=True)
```

TODO
----------
- [ ] Создать файл requirements.txt для легкой установки необходимых python зависимостей.
- [ ] В функции \answer{} в файле шаблона задачи не нужно указывать кол-во баллов за задачу. Эта информация должна определяться в панели управления генератором непосредственно в момент создания реализации банка задач.
- [ ] Конвертировать задачи из TeX в HTML нужно не позадачно, это будет слишком долго, а некое сгруппирированое их множество. 
- [ ] После этапа создания подстановок должен следовать этап создания вариантов. Мы ещё ничего не конвертировали. На основе TeX файлов у нас создались другие ТеХ файлы.
- [ ] Конвертировать в HTML нужно конкретные TeX варианты. 
- [ ] Конвертация вариантов в HTML должна происходить многопоточно. Пускай по умолчанию будет 5 поток. 
- [ ] Конвертация в HTML будет происходить не отдельных вариантов,а сгруппирированных в один файл. Пускай по умолчанию будет по 5 файлов в варианте.
- [ ] Попробовать обьединить все ТеХ варианты в один и сконвентировать его одним махом. 
- [ ] Создавать параметризации задач придётся в многопоточность режиме.
- [ ] Должна появиться команда, создающая конфигурационные файлы в директории исполняемого файла. Это удобно при поставке библиотеки через pip.
- [ ] Для каждой функции должна быть прописана справка.
- [ ] При выполнении ноутбука с параметризацией для создания подстановок нужно включить проверку на содержание в нем команды, вызывающей себя же.

Лицензия
-------

Copyright (c) 2022 Артём Золотаревский.

**Task Generator** это свободное программное обеспечение, доступное по лицензии GNU GPLV3. Дополнительные
сведения см. в файле LICENSE.

[![License GPLV3](http://img.shields.io/badge/license-GPLV3-green.svg?style=flat)](https://github.com/metrazlot/taskgen/blob/main/LICENSE)
