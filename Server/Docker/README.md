# Docker Folder

## 개요
본 폴더는 Docker에서 실제적으로 사용하는 소스 코드들을 관리하는 폴더로서
각 용도에 해당하는 Image들 및 Container들을 위하여 필요한 파일들이 저장됨.

## 특징
1. 각 Container 혹은 Image는 Dockerfile을 기준으로 상위 폴더에 접근할 수 없음.
   - ~~.. <- 로 접근 불가.~~ 
   - ~~각 기능에 필요한 파일 혹은 디렉터리는 각 기능 폴더에 들어가야함.~~
   - ~~따라서 현재는 수동으로 각 기능에 해당하는 파일들을 각 폴더에 넣어야 함.~~
   - ~~추후 Shell Script로 대체 예정~~
   - docker container run 시 volume option으로 절대경로 혹은 ~를 사용한 상대경로로 폴더 접근 가능

2. 실행되어진 Container가 종료될 경우 Container안의 모든 정보는 삭제됨.
   따라서 실행되어진 Container의 정보를 백업해야한다면 팀장에게 문의

## 하위 폴더
### 0. 공통으로 포함되어 있는 파일
- 각 기능에 대한 Dockerfile
### 1. frontdocker
- front 팀의 결과물이 실행되는 컨테이너에 필요한 파일들이 저장된 폴더
- 현재 frontdocker 이미지를 위한 Dockerfile 만 존재

### 2. superdocker
- server 팀에서 분기를 관리하기 위하여 실행되는 컨테이너에 필요한 파일들이 저장된 폴더
- 분기를 관리하는 프로그램은 Server 팀에서 개발하지 않고 Backend 팀에서 개발하였기 때문에
 Main_API 폴더를 참고하길 바람.
- 현재 superdocker 이미지를 위한 Dockerfile 만 존재

## docker container 실행 방법
### 개요
본 프로젝트의 Server는 Docker로 수행되며 아래와 같은 프로그램들이 설치되어 있어야 구동 가능함. 뿐만 아니라 각 폴더 내의 Dockerfile과 docker-compose에는 적절한 설명이 적혀져 있으므로 참고하길 바람.

** 추가적으로 현재 WSL에서는 Docker 사용이 불가하므로 아래의 실행 방법은 Linux 용이기 때문에
실행에 있어 주의를 하기 바람. (본 개발자도 윈도우에서는 실행해보지 않음.)

### 필요 프로그램 및 환경
#### 0. Environment
- AWS EC2 FreeTier (Region: Seoul)
- OS: Ubuntu 16.04
- CPU: ??
- RAM: 1GB
- SSD: 8GB

#### 1. Docker
- Install site: https://docs.docker.com/install/
- reference site: https://docs.docker.com/engine/reference/builder/
#### 2. docker-compose
- version 3 이상을 요구
- Install site: https://docs.docker.com/compose/install/
- reference site: https://docs.docker.com/compose/compose-file/


### 실행 방법
1. 경로를 현 프로젝트의 Docker 폴더로 변경
``` bash
   cd {프로젝트가 저장된 경로}/Product/Server/Docker
   ex) cd ~/Product/Server/Docker
```

2. 명령어 입력
``` bash
   docker-compose up -d super front
```

3. URL 접속
``` url
   localhost:30000 <- front   페이지 접속 링크
   localhost:30001 <- backend 페이지 접속 링크
```