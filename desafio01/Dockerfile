FROM golang:latest

WORKDIR /go/src/

COPY . .

RUN GOOS=linux go build main.go

ENTRYPOINT ["./main"]