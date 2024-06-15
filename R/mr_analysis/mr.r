#install packages 
install.packages("ggplot") 
#load packages 
library(ggplot2) 

data <- read.csv('data.csv', header = TRUE)

print(data)
summary(data)
cor(data[, c("SOCS.S_1", "MDS_20", "MDS_23")])
cor(data[, c("SCB_8", "SCB_13", "SCB_21")])
cor(data[, c("SCB_8", "SCB_22", "SCB_24")])

model1 <- lm(SCB_8 ~ SOCS.S_1 + MDS_20 + MDS_23, data = data)
model2 <- lm(SCB_13 ~ SOCS.S_1 + MDS_20 + MDS_23, data = data)
model3 <- lm(SCB_21 ~ SOCS.S_1 + MDS_20 + MDS_23, data = data)

summary(model1)
summary(model2)
summary(model3)

par(mfrow = c(2, 2))
plot(model1)

plot(model2)

plot(model3)


