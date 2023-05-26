.PHONY: install dev build start export clean

install:
	npm install

dev: install
	npm start

build: install
	npm run build

start: build
	npm start

export: build
	npm run export

clean:
	rm -r .next