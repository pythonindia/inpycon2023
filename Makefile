.PHONY: install dev build start export deploy clean

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

deploy:
	git pull origin main
	make export
	sudo nginx -s reload

clean:
	rm -r .next