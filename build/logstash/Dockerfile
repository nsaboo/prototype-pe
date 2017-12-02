# docker image
FROM docker.elastic.co/logstash/logstash:5.6.3

RUN rm -f /usr/share/logstash/pipeline/logstash.conf

# Create app directory
# WORKDIR /usr/src/app

# pipeline configuration files (which define the Logstash processing pipeline)
ADD configs/pipeline/ /usr/share/logstash/pipeline/

# setting configuration files (which specify options that control Logstash startup and execution)
ADD configs/settings/ /usr/share/logstash/config/

ENTRYPOINT ["logstash"]
CMD ["-f", "/usr/share/logstash/pipeline/logstash.conf"]

# to run locally with LS_JAVA_OPTS
# docker run --rm -it -e LS_JAVA_OPTS="-Xms512m -Xmx512m" logstash
