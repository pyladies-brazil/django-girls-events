#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Paula Grangeiro'
SITEURL = ''
SITENAME = u'Django Girls Brasil'
SITE_DESCRIPTION = 'Agregador de eventos Django Girls pelo Brasil'
SITE_KEYWORDS = 'Django Girls, Eventos, Brasil'

PATH = 'content'

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = u'pt-br'
DEFAULT_PAGINATION = False

CHARSET = 'UTF-8'

STATIC_URL = 'theme'

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DIRECT_TEMPLATES = ['index', 'about']

'''
# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)


# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
'''
