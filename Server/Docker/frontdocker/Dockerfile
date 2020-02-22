# docker hub에서의 nginx:latest image를 사용하겠음.
FROM nginx:latest
# 제작자: s5kywa1k3r (MAINTAINER에서 LABEL로 변경하기를 강력히 권고)
MAINTAINER s5kywa1k3r

# image 내부에 update를 해줌으로서 기본적인 프로그램들 update
RUN apt-get update
# image 내부에 필요한 프로그램들 설치
RUN apt-get install -y npm git procps curl

#################
##   BACKEND   ##
#################
# Install npm: 6.13.4, ts: 3.7.4, ts-node: 8.5.4
RUN npm install -g npm@6.13.4 typescript@3.7.4 ts-node@8.5.4

# Install nodeJS: 12.14.0
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# Open Host Port
# express port
EXPOSE 3000

# database port
# EXPOSE 33060

# superdocker port
# EXPOSE 31111
