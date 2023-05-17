.PHONY: install dev build start clean

install:
	npm install

dev: install
	npm start

build: install
	npm run build

start: build
	npm start

clean:
	rm -r .next