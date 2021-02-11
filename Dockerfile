
# specify base image 
FROM node:alpine

# copy application code 
COPY ./ /app/

# change working directory
WORKDIR /app
# RUN cd /app  ** NO ** 

# install dependencies
RUN ["npm" , "install"]

# run the image
# CMD [ "npm" , "start" ]
CMD ["npm" , "start"]
