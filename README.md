# TiVER

Simple shell script to handle different tiapp/icons of a Titanium application"

## Install

```
[sudo] npm install -g tiver
```

## Usage

In your **Titanium Project**, put different `tiapp.${VER}.xml` files and different `icon.${VER}.png` files for your version.

For example, if you got 2 version, **BETA** and **RELEASE**, your directory structure must be

```
...
tiapp.beta.xml
icon.beta.png
tiapp.release.xml
icon.release.png
...
```

So, run

```
tiver -t beta
```

This will symlink `tiapp.beta.xml` to `tiapp.xml` and with **TiCons-CLI** generate all assets from your `icon.beta.png`