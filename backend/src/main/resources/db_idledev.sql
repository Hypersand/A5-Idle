-- MySQL dump 10.13  Distrib 8.0.33, for macos12.6 (arm64)
--
-- Host: localhost    Database: idledev
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `BODY_TYPE`
--

DROP TABLE IF EXISTS `BODY_TYPE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BODY_TYPE` (
  `body_type_id` bigint NOT NULL AUTO_INCREMENT,
  `type` varchar(10) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `description` text,
  `purchase_rate` varchar(20) DEFAULT NULL,
  `img_url` text,
  PRIMARY KEY (`body_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BODY_TYPE`
--

LOCK TABLES `BODY_TYPE` WRITE;
/*!40000 ALTER TABLE `BODY_TYPE` DISABLE KEYS */;
INSERT INTO `BODY_TYPE` VALUES (1,'7인승',0,'2열 가운데 시트를 없에 2열 탑승객의 편의는 물론, 3열 탑승객의 승하차가 편리합니다.','구매자 50%가 선택','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/7.jpg'),(2,'8인승',0,'1열 2명, 2열 3명, 3열 3명이 탑승할 수 있는 구조로, 많은 인원이 탑승할 수 있습니다.','구매자 50%가 선택','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/8.jpg');
/*!40000 ALTER TABLE `BODY_TYPE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CAR_EXTERIOR_IMAGE`
--

DROP TABLE IF EXISTS `CAR_EXTERIOR_IMAGE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CAR_EXTERIOR_IMAGE` (
  `car_exterior_img_id` bigint NOT NULL AUTO_INCREMENT,
  `car_exterior_img_url` text,
  `exterior_color_id` bigint DEFAULT NULL,
  `img_sequence` int DEFAULT NULL,
  PRIMARY KEY (`car_exterior_img_id`),
  KEY `FK_EXTERIOR_COLOR_TO_CAR_EXTERIOR_IMAGE_1` (`exterior_color_id`),
  CONSTRAINT `FK_EXTERIOR_COLOR_TO_CAR_EXTERIOR_IMAGE_1` FOREIGN KEY (`exterior_color_id`) REFERENCES `EXTERIOR_COLOR` (`exterior_color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=421 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CAR_EXTERIOR_IMAGE`
--

LOCK TABLES `CAR_EXTERIOR_IMAGE` WRITE;
/*!40000 ALTER TABLE `CAR_EXTERIOR_IMAGE` DISABLE KEYS */;
INSERT INTO `CAR_EXTERIOR_IMAGE` VALUES (1,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_001.png',1,1),(2,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_002.png',1,2),(3,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_003.png',1,3),(4,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_004.png',1,4),(5,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_005.png',1,5),(6,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_006.png',1,6),(7,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_007.png',1,7),(8,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_008.png',1,8),(9,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_009.png',1,9),(10,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_010.png',1,10),(11,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_011.png',1,11),(12,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_012.png',1,12),(13,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_013.png',1,13),(14,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_014.png',1,14),(15,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_015.png',1,15),(16,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_016.png',1,16),(17,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_017.png',1,17),(18,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_018.png',1,18),(19,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_019.png',1,19),(20,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_020.png',1,20),(21,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_021.png',1,21),(22,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_022.png',1,22),(23,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_023.png',1,23),(24,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_024.png',1,24),(25,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_025.png',1,25),(26,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_026.png',1,26),(27,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_027.png',1,27),(28,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_028.png',1,28),(29,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_029.png',1,29),(30,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_030.png',1,30),(31,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_031.png',1,31),(32,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_032.png',1,32),(33,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_033.png',1,33),(34,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_034.png',1,34),(35,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_035.png',1,35),(36,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_036.png',1,36),(37,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_037.png',1,37),(38,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_038.png',1,38),(39,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_039.png',1,39),(40,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_040.png',1,40),(41,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_041.png',1,41),(42,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_042.png',1,42),(43,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_043.png',1,43),(44,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_044.png',1,44),(45,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_045.png',1,45),(46,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_046.png',1,46),(47,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_047.png',1,47),(48,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_048.png',1,48),(49,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_049.png',1,49),(50,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_050.png',1,50),(51,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_051.png',1,51),(52,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_052.png',1,52),(53,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_053.png',1,53),(54,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_054.png',1,54),(55,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_055.png',1,55),(56,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_056.png',1,56),(57,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_057.png',1,57),(58,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_058.png',1,58),(59,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_059.png',1,59),(60,'https://a5idle.s3.ap-northeast-2.amazonaws.com/abyss_exterior(accel)/image_060.png',1,60),(61,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_001.png',2,1),(62,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_002.png',2,2),(63,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_003.png',2,3),(64,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_004.png',2,4),(65,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_005.png',2,5),(66,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_006.png',2,6),(67,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_007.png',2,7),(68,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_008.png',2,8),(69,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_009.png',2,9),(70,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_010.png',2,10),(71,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_011.png',2,11),(72,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_012.png',2,12),(73,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_013.png',2,13),(74,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_014.png',2,14),(75,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_015.png',2,15),(76,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_016.png',2,16),(77,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_017.png',2,17),(78,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_018.png',2,18),(79,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_019.png',2,19),(80,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_020.png',2,20),(81,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_021.png',2,21),(82,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_022.png',2,22),(83,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_023.png',2,23),(84,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_024.png',2,24),(85,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_025.png',2,25),(86,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_026.png',2,26),(87,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_027.png',2,27),(88,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_028.png',2,28),(89,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_029.png',2,29),(90,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_030.png',2,30),(91,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_031.png',2,31),(92,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_032.png',2,32),(93,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_033.png',2,33),(94,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_034.png',2,34),(95,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_035.png',2,35),(96,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_036.png',2,36),(97,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_037.png',2,37),(98,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_038.png',2,38),(99,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_039.png',2,39),(100,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_040.png',2,40),(101,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_041.png',2,41),(102,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_042.png',2,42),(103,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_043.png',2,43),(104,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_044.png',2,44),(105,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_045.png',2,45),(106,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_046.png',2,46),(107,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_047.png',2,47),(108,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_048.png',2,48),(109,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_049.png',2,49),(110,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_050.png',2,50),(111,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_051.png',2,51),(112,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_052.png',2,52),(113,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_053.png',2,53),(114,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_054.png',2,54),(115,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_055.png',2,55),(116,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_056.png',2,56),(117,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_057.png',2,57),(118,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_058.png',2,58),(119,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_059.png',2,59),(120,'https://a5idle.s3.ap-northeast-2.amazonaws.com/silver_exterior(accel)/image_060.png',2,60),(121,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_001.png',4,1),(122,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_002.png',4,2),(123,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_003.png',4,3),(124,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_004.png',4,4),(125,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_005.png',4,5),(126,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_006.png',4,6),(127,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_007.png',4,7),(128,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_008.png',4,8),(129,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_009.png',4,9),(130,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_010.png',4,10),(131,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_011.png',4,11),(132,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_012.png',4,12),(133,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_013.png',4,13),(134,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_014.png',4,14),(135,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_015.png',4,15),(136,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_016.png',4,16),(137,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_017.png',4,17),(138,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_018.png',4,18),(139,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_019.png',4,19),(140,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_020.png',4,20),(141,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_021.png',4,21),(142,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_022.png',4,22),(143,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_023.png',4,23),(144,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_024.png',4,24),(145,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_025.png',4,25),(146,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_026.png',4,26),(147,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_027.png',4,27),(148,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_028.png',4,28),(149,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_029.png',4,29),(150,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_030.png',4,30),(151,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_031.png',4,31),(152,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_032.png',4,32),(153,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_033.png',4,33),(154,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_034.png',4,34),(155,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_035.png',4,35),(156,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_036.png',4,36),(157,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_037.png',4,37),(158,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_038.png',4,38),(159,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_039.png',4,39),(160,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_040.png',4,40),(161,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_041.png',4,41),(162,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_042.png',4,42),(163,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_043.png',4,43),(164,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_044.png',4,44),(165,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_045.png',4,45),(166,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_046.png',4,46),(167,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_047.png',4,47),(168,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_048.png',4,48),(169,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_049.png',4,49),(170,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_050.png',4,50),(171,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_051.png',4,51),(172,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_052.png',4,52),(173,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_053.png',4,53),(174,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_054.png',4,54),(175,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_055.png',4,55),(176,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_056.png',4,56),(177,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_057.png',4,57),(178,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_058.png',4,58),(179,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_059.png',4,59),(180,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_060.png',4,60),(181,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_001.png',5,1),(182,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_002.png',5,2),(183,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_003.png',5,3),(184,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_004.png',5,4),(185,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_005.png',5,5),(186,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_006.png',5,6),(187,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_007.png',5,7),(188,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_008.png',5,8),(189,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_009.png',5,9),(190,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_010.png',5,10),(191,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_011.png',5,11),(192,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_012.png',5,12),(193,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_013.png',5,13),(194,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_014.png',5,14),(195,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_015.png',5,15),(196,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_016.png',5,16),(197,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_017.png',5,17),(198,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_018.png',5,18),(199,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_019.png',5,19),(200,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_020.png',5,20),(201,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_021.png',5,21),(202,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_022.png',5,22),(203,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_023.png',5,23),(204,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_024.png',5,24),(205,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_025.png',5,25),(206,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_026.png',5,26),(207,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_027.png',5,27),(208,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_028.png',5,28),(209,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_029.png',5,29),(210,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_030.png',5,30),(211,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_031.png',5,31),(212,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_032.png',5,32),(213,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_033.png',5,33),(214,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_034.png',5,34),(215,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_035.png',5,35),(216,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_036.png',5,36),(217,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_037.png',5,37),(218,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_038.png',5,38),(219,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_039.png',5,39),(220,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_040.png',5,40),(221,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_041.png',5,41),(222,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_042.png',5,42),(223,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_043.png',5,43),(224,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_044.png',5,44),(225,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_045.png',5,45),(226,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_046.png',5,46),(227,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_047.png',5,47),(228,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_048.png',5,48),(229,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_049.png',5,49),(230,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_050.png',5,50),(231,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_051.png',5,51),(232,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_052.png',5,52),(233,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_053.png',5,53),(234,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_054.png',5,54),(235,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_055.png',5,55),(236,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_056.png',5,56),(237,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_057.png',5,57),(238,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_058.png',5,58),(239,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_059.png',5,59),(240,'https://a5idle.s3.ap-northeast-2.amazonaws.com/brown_exterior(accel)/image_060.png',5,60),(241,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_001.png',6,1),(242,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_002.png',6,2),(243,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_003.png',6,3),(244,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_004.png',6,4),(245,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_005.png',6,5),(246,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_006.png',6,6),(247,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_007.png',6,7),(248,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_008.png',6,8),(249,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_009.png',6,9),(250,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_010.png',6,10),(251,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_011.png',6,11),(252,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_012.png',6,12),(253,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_013.png',6,13),(254,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_014.png',6,14),(255,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_015.png',6,15),(256,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_016.png',6,16),(257,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_017.png',6,17),(258,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_018.png',6,18),(259,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_019.png',6,19),(260,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_020.png',6,20),(261,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_021.png',6,21),(262,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_022.png',6,22),(263,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_023.png',6,23),(264,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_024.png',6,24),(265,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_025.png',6,25),(266,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_026.png',6,26),(267,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_027.png',6,27),(268,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_028.png',6,28),(269,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_029.png',6,29),(270,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_030.png',6,30),(271,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_031.png',6,31),(272,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_032.png',6,32),(273,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_033.png',6,33),(274,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_034.png',6,34),(275,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_035.png',6,35),(276,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_036.png',6,36),(277,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_037.png',6,37),(278,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_038.png',6,38),(279,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_039.png',6,39),(280,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_040.png',6,40),(281,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_041.png',6,41),(282,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_042.png',6,42),(283,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_043.png',6,43),(284,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_044.png',6,44),(285,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_045.png',6,45),(286,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_046.png',6,46),(287,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_047.png',6,47),(288,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_048.png',6,48),(289,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_049.png',6,49),(290,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_050.png',6,50),(291,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_051.png',6,51),(292,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_052.png',6,52),(293,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_053.png',6,53),(294,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_054.png',6,54),(295,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_055.png',6,55),(296,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_056.png',6,56),(297,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_057.png',6,57),(298,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_058.png',6,58),(299,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_059.png',6,59),(300,'https://a5idle.s3.ap-northeast-2.amazonaws.com/gray_exterior(accel)/image_060.png',6,60),(301,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_001.png',7,1),(302,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_002.png',7,2),(303,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_003.png',7,3),(304,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_004.png',7,4),(305,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_005.png',7,5),(306,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_006.png',7,6),(307,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_007.png',7,7),(308,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_008.png',7,8),(309,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_009.png',7,9),(310,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_010.png',7,10),(311,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_011.png',7,11),(312,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_012.png',7,12),(313,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_013.png',7,13),(314,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_014.png',7,14),(315,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_015.png',7,15),(316,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_016.png',7,16),(317,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_017.png',7,17),(318,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_018.png',7,18),(319,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_019.png',7,19),(320,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_020.png',7,20),(321,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_021.png',7,21),(322,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_022.png',7,22),(323,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_023.png',7,23),(324,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_024.png',7,24),(325,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_025.png',7,25),(326,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_026.png',7,26),(327,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_027.png',7,27),(328,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_028.png',7,28),(329,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_029.png',7,29),(330,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_030.png',7,30),(331,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_031.png',7,31),(332,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_032.png',7,32),(333,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_033.png',7,33),(334,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_034.png',7,34),(335,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_035.png',7,35),(336,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_036.png',7,36),(337,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_037.png',7,37),(338,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_038.png',7,38),(339,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_039.png',7,39),(340,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_040.png',7,40),(341,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_041.png',7,41),(342,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_042.png',7,42),(343,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_043.png',7,43),(344,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_044.png',7,44),(345,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_045.png',7,45),(346,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_046.png',7,46),(347,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_047.png',7,47),(348,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_048.png',7,48),(349,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_049.png',7,49),(350,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_050.png',7,50),(351,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_051.png',7,51),(352,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_052.png',7,52),(353,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_053.png',7,53),(354,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_054.png',7,54),(355,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_055.png',7,55),(356,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_056.png',7,56),(357,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_057.png',7,57),(358,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_058.png',7,58),(359,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_059.png',7,59),(360,'https://a5idle.s3.ap-northeast-2.amazonaws.com/white_exterior(accel)/image_060.png',7,60),(361,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_001.png',3,1),(362,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_002.png',3,2),(363,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_003.png',3,3),(364,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_004.png',3,4),(365,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_005.png',3,5),(366,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_006.png',3,6),(367,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_007.png',3,7),(368,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_008.png',3,8),(369,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_009.png',3,9),(370,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_010.png',3,10),(371,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_011.png',3,11),(372,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_012.png',3,12),(373,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_013.png',3,13),(374,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_014.png',3,14),(375,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_015.png',3,15),(376,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_016.png',3,16),(377,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_017.png',3,17),(378,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_018.png',3,18),(379,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_019.png',3,19),(380,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_020.png',3,20),(381,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_021.png',3,21),(382,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_022.png',3,22),(383,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_023.png',3,23),(384,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_024.png',3,24),(385,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_025.png',3,25),(386,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_026.png',3,26),(387,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_027.png',3,27),(388,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_028.png',3,28),(389,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_029.png',3,29),(390,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_030.png',3,30),(391,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_031.png',3,31),(392,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_032.png',3,32),(393,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_033.png',3,33),(394,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_034.png',3,34),(395,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_035.png',3,35),(396,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_036.png',3,36),(397,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_037.png',3,37),(398,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_038.png',3,38),(399,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_039.png',3,39),(400,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_040.png',3,40),(401,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_041.png',3,41),(402,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_042.png',3,42),(403,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_043.png',3,43),(404,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_044.png',3,44),(405,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_045.png',3,45),(406,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_046.png',3,46),(407,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_047.png',3,47),(408,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_048.png',3,48),(409,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_049.png',3,49),(410,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_050.png',3,50),(411,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_051.png',3,51),(412,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_052.png',3,52),(413,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_053.png',3,53),(414,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_054.png',3,54),(415,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_055.png',3,55),(416,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_056.png',3,56),(417,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_057.png',3,57),(418,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_058.png',3,58),(419,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_059.png',3,59),(420,'https://a5idle.s3.ap-northeast-2.amazonaws.com/blue_exterior(accel)/image_060.png',3,60);
/*!40000 ALTER TABLE `CAR_EXTERIOR_IMAGE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CAR_MASTER`
--

DROP TABLE IF EXISTS `CAR_MASTER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CAR_MASTER` (
  `car_master_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `phone_number` varchar(11) DEFAULT NULL,
  `dealership` varchar(20) DEFAULT NULL,
  `description` text,
  `sales_rate` int DEFAULT NULL,
  `img_url` text,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  PRIMARY KEY (`car_master_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CAR_MASTER`
--

LOCK TABLES `CAR_MASTER` WRITE;
/*!40000 ALTER TABLE `CAR_MASTER` DISABLE KEYS */;
INSERT INTO `CAR_MASTER` VALUES (1,'김팰리','010-0000-00','왕십리 지점','고객님의 모든 구매 과정에 정성을 다하겠습니다.',30,NULL,36.1234,126.1234),(2,'정현대','010-0000-00','한양 대리점','안녕하세요 믿음을 주는 카마스터 정현대입니다.',20,NULL,36.1324,126.1324),(3,'심포니','010-0000-00','마장 대리점','고객님을 위한 최고의 차량을 추천해드릴게요.',10,NULL,36.1423,126.1432);
/*!40000 ALTER TABLE `CAR_MASTER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CAR_TYPE`
--

DROP TABLE IF EXISTS `CAR_TYPE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CAR_TYPE` (
  `car_type_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`car_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CAR_TYPE`
--

LOCK TABLES `CAR_TYPE` WRITE;
/*!40000 ALTER TABLE `CAR_TYPE` DISABLE KEYS */;
INSERT INTO `CAR_TYPE` VALUES (1,'팰리세이드');
/*!40000 ALTER TABLE `CAR_TYPE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DRIVING_METHOD`
--

DROP TABLE IF EXISTS `DRIVING_METHOD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DRIVING_METHOD` (
  `driving_method_id` bigint NOT NULL AUTO_INCREMENT,
  `type` varchar(10) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `description` text,
  `img_url` text,
  `purchase_rate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`driving_method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DRIVING_METHOD`
--

LOCK TABLES `DRIVING_METHOD` WRITE;
/*!40000 ALTER TABLE `DRIVING_METHOD` DISABLE KEYS */;
INSERT INTO `DRIVING_METHOD` VALUES (1,'2WD',0,'엔진 동려이 전륜 후륜 중 하나로 전달되어 움직입니다. 차체가 가벼워 연료 효율이 높습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/10.jpg','구매자 60%가 선택'),(2,'4WD',237000,'상시 4륜 구동 시스템으로 주행 환경에 맞춰 전후륜 구동력을 자동배분해 안전성을 높입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/10.jpg','구매자 40%가 선택');
/*!40000 ALTER TABLE `DRIVING_METHOD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ENGINE`
--

DROP TABLE IF EXISTS `ENGINE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ENGINE` (
  `engine_id` bigint NOT NULL AUTO_INCREMENT,
  `type` varchar(30) DEFAULT NULL,
  `img_url` text,
  `price` int DEFAULT NULL,
  `peak_output` int DEFAULT NULL,
  `max_torque` double DEFAULT NULL,
  `min_fuel` double DEFAULT NULL,
  `max_fuel` double DEFAULT NULL,
  `purchase_rate` varchar(20) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`engine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ENGINE`
--

LOCK TABLES `ENGINE` WRITE;
/*!40000 ALTER TABLE `ENGINE` DISABLE KEYS */;
INSERT INTO `ENGINE` VALUES (1,'디젤 2.2','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/5.jpg',1480000,202,45,11.4,12.4,'구매자 45%가 선택','강력한 토크와 탁월한 효율로 여유있는 파워와 높은 연비를 제공하는 디젤 엔진입니다.'),(2,'가솔린 3.8','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/6.jpg',0,295,36.2,8,9.2,'구매자 55%가 선택','고효율의 3.8 가솔린 엔진으로 다이내믹한 주행 성능은 물론, 정속성까지 선사합니다.');
/*!40000 ALTER TABLE `ENGINE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EXTERIOR_COLOR`
--

DROP TABLE IF EXISTS `EXTERIOR_COLOR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EXTERIOR_COLOR` (
  `exterior_color_id` bigint NOT NULL AUTO_INCREMENT,
  `color` varchar(20) DEFAULT NULL,
  `color_img_url` text,
  `price` int DEFAULT NULL,
  `purchase_rate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`exterior_color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EXTERIOR_COLOR`
--

LOCK TABLES `EXTERIOR_COLOR` WRITE;
/*!40000 ALTER TABLE `EXTERIOR_COLOR` DISABLE KEYS */;
INSERT INTO `EXTERIOR_COLOR` VALUES (1,'어비스 블랙 펄','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png',0,'구매자의 30%가 선택'),(2,'쉬버링 실버 메탈릭','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png',0,'구매자의 20%가 선택'),(3,'로버스트 에메랄드 펄','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/116.png',0,'NEW'),(4,'문라이트 블루 펄','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/13.png',0,'구매자의 10%가 선택'),(5,'가이아 브라운 펄','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/14.png',0,'구매자의 5%가 선택'),(6,'그라파이트 그레이 메탈릭','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/15.png',0,'구매자의 5%가 선택'),(7,'크리미 화이트 펄','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/16.png',100000,'구매자의 30%가 선택');
/*!40000 ALTER TABLE `EXTERIOR_COLOR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FUNCTION_CATEGORY`
--

DROP TABLE IF EXISTS `FUNCTION_CATEGORY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FUNCTION_CATEGORY` (
  `function_category_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`function_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FUNCTION_CATEGORY`
--

LOCK TABLES `FUNCTION_CATEGORY` WRITE;
/*!40000 ALTER TABLE `FUNCTION_CATEGORY` DISABLE KEYS */;
INSERT INTO `FUNCTION_CATEGORY` VALUES (1,'파워트레인/성능'),(2,'지능형 안전기술'),(3,'안전'),(4,'외관'),(5,'내장'),(6,'시트'),(7,'편의'),(8,'멀티미디어');
/*!40000 ALTER TABLE `FUNCTION_CATEGORY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FUNCTIONS`
--

DROP TABLE IF EXISTS `FUNCTIONS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FUNCTIONS` (
  `function_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` text,
  `img_url` text,
  `option_id` bigint DEFAULT NULL,
  `is_my_trim` varchar(5) DEFAULT NULL,
  `function_category_id` bigint DEFAULT NULL,
  `wheel_logo_img_url` text,
  PRIMARY KEY (`function_id`),
  KEY `FK_FUNCTION_CATEGORY_TO_FUNCTION_1` (`function_category_id`),
  KEY `FK_OPTION_TO_FUNCTION_1` (`option_id`),
  CONSTRAINT `FK_FUNCTION_CATEGORY_TO_FUNCTION_1` FOREIGN KEY (`function_category_id`) REFERENCES `FUNCTION_CATEGORY` (`function_category_id`),
  CONSTRAINT `FK_OPTION_TO_FUNCTION_1` FOREIGN KEY (`option_id`) REFERENCES `OPTION` (`option_id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FUNCTIONS`
--

LOCK TABLES `FUNCTIONS` WRITE;
/*!40000 ALTER TABLE `FUNCTIONS` DISABLE KEYS */;
INSERT INTO `FUNCTIONS` VALUES (1,'8단 자동변속기','전달 효율 증대로 전 엔진 동급 최고의 연비를 구현함은 물론, 최적의 변속 성능으로 드라이빙 감성까지 향상시켜줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/19.jpg',NULL,'FALSE',1,NULL),(2,'ISG 시스템','신호 대기 상황이거나 정차 중일 때 차의 엔진을 일시 정지하여 연비를 향상시키고, 배출가스 발생을 억제하는 시스템입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/20.jpg',NULL,'FALSE',1,NULL),(3,'통합주행모드','COMFORT, ECO, SPORT, SMART 4가지 드라이브 모드를 지원하여 운전자의 니즈에 따른 다양한 주행 모드를 선택할 수 있습니다. 각 주행모드의 상태는 클러스터와 AVN을 통해 확인 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/21.jpg',NULL,'FALSE',1,NULL),(4,'랙구동형 전동식 파워 스티어링(R-MDPS)','조향 시 운전자의 힘을 유압대신 모터가 바퀴로 전달하는 기술로 모터가 차량 하체에 장착되어 타이어를 제어합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/22.jpg',NULL,'FALSE',1,NULL),(5,'전자식 변속버튼','전자식 변속 버튼을 적용하여 조작 편의성을 높이는 동시에 하이테크적인 이미지를 연출했습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/23.jpg',NULL,'FALSE',1,NULL),(6,'HTRAC','시시각각 변하는 주행환경에 맞춰 전 / 후 구동력을 능동적으로 배분함으로써 드라이빙의 즐거움을 선사합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/127.jpg',NULL,'FALSE',1,NULL),(7,'험로주행모드','험로주행모드 : 도로 여건에 따라 SNOW / MUD / SAND 주행모드를 선택할 수 있습니다. 각 주행 모드의 상태는 클러스터를 통해 확인가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/drivemode_s.jpg',NULL,'FALSE',1,NULL),(8,'하이빔 보조','마주오는 차량 또는 앞 차량의 램프 및 주변 밝기 상태를 감지하여 전조등을 자동으로 상향 또는 하향으로 전환합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/24.jpg',NULL,'FALSE',2,NULL),(9,'진동 경고 스티어링 휠','전방 차량과의 충돌/차량의 차선 이탈/후측방 충돌 위험 시, 운전자 주의 경고 시 스티어링에 진동을 주어 경고합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/25.jpg',NULL,'FALSE',2,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/logo-npp.png'),(10,'스마트 크루즈 컨트롤(스탑앤고 기능 포함)','전방의 차량을 감지하여 스스로 가속과 감속을 하며 차량의 속도를 일정하게 유지 시켜주고, 차량 정체로 앞차 정차 시 정지하고 전방 차량 출발 시 다시 거리를 유지하며 주행하는 기능입니다.\n※ 단, 자동 정차 시간이 3초 초과 시, 별도 조작으로 출발 가능','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/26.jpg',NULL,'FALSE',2,NULL),(11,'내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로)','스마트 크루즈 작동 중 고속도로/도시고속도로/자동차전용 도로 내 안전구간 진입 시, 감속 제어를 통해 주행 편의 제공합니다. 또한 곡선 구간 진입 시, 감속 제어를 통해 주행 편의를 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/27.jpg',NULL,'FALSE',2,NULL),(12,'고속도로 주행 보조','고속도로 본선 주행 시 전방 차량과의 거리, 차선 정보, 내비게이션 정보를 이용하여 차량 속도를 제어는 물론 차로 유지를 보조해줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/28.jpg',NULL,'FALSE',2,NULL),(13,'차로 유지 보조','전방 카메라를 이용하여 차선을 인식하고 차로의 중앙으로 주행할 수 있도록 조향을 보조합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/29.jpg',NULL,'FALSE',2,NULL),(14,'전방 충돌방지 보조(차량/보행자/자전거 탑승자/교차로 대향차)','전방 카메라와 전방 레이더의 신호를 종합적으로 판단하여 전방 차량, 보행자, 자전거 탑승자와 충돌 위험 상황이 감지될 경우 운전자에게 이를 경고하고, 필요 시 브레이크 작동을 도와줍니다.\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/30.jpg',NULL,'FALSE',2,NULL),(15,'차로 이탈방지 보조','전방 카메라로 주행 차로를 실시간으로 감지하여 차량이 차로를 이탈하려 할 경우, 클러스터에 경고하고 스티어링 휠을 제어하여 안전하게 주행 차로를 유지하도록 보조합니다.\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/31.jpg',NULL,'FALSE',2,NULL),(16,'운전자 주의 경고','차량이 스스로 운전자의 주행 패턴과 차로 내 차량 위치 등을 종합적으로 분석하여 주의 운전이 필요하다고 판단되면, 팝업메시지와 경고음을 통해 운전자 휴식을 유도합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/32.jpg',NULL,'FALSE',2,NULL),(17,'후측방 충돌 경고(주행)','\n차로 변경을 위하여 방향지시등 스위치 조작 시, 후측방 충돌 위험이 감지되면 경고를 해줍니다.\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/33.jpg',21,'TRUE',2,NULL),(18,'후측방 충돌방지 보조(전진 출차)','평행 주차상태에서 전진 출차 중, 후측방 차량과 충돌 위험이 감지되면 자동으로 제동을 도와줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/34.jpg',21,'FALSE',2,NULL),(19,'안전 하차 보조','정차 후 탑승자가 차에서 내리려고 도어를 열 때, 후측방에서 접근하는 차량이 감지되면 경고를 해줍니다. 또한 전자식 차일드 락이 작동하여 문이 열리지 않도록 도와줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/35.jpg',21,'FALSE',2,NULL),(20,'후방 교차 충돌방지 보조','후진 출차 시 후방 교차 차량을 감지하여 운전자에게 경고하고 필요 시에는 브레이크 제어를 통해 후방 교차 충돌방지를 보조합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/36.jpg',21,'FALSE',2,NULL),(21,'전방 충돌방지 보조(교차 차량/추월시 대향차/측방 접근차)','선행 차량이 갑자기 속도를 줄이거나, 앞에 정지 차량 혹은 보행자가 나타나는 등 전방 충돌 위험이 감지되면 경고를 해줍니다. 경고 후에도 충돌 위험이 높아지면 자동으로 제동을 도와줍니다. 주행 중 전방의 자전거 탑승자 및 교차로에서 좌회전 시 맞은편에서 다가오는 차량과 충돌 위험이 있다면 자동으로 제동을 도와줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/106-1.jpg',16,'FALSE',2,NULL),(22,'내비게이션 기반 스마트 크루즈 컨트롤(진출입로)','스마트 크루즈 작동 중 고속도로/도시고속도로/자동차전용 도로 내 고속도로 진출입로 주행 시 차로를 판단하여 사전감속 또는 최적 속도에 맞추어 감속을 진행합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/106-2.jpg',16,'TRUE',2,NULL),(23,'고속도로 주행 보조 2','고속도로 / 자동차 전용도로에서 앞차와의 거리와 설정 속도를 유지하며 주행할 뿐 아니라, 곡선로에서도 차로의 중앙을 유지하며 주행할 수 있도록 도와줍니다. 일정 속도 이상으로 주행 시, 스티어링 휠을 잡은 상태에서 방향지시등 스위치를 변경하고자 하는 차로 방향으로 움직이면 자동으로 차로를 변경해 줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/106-3.jpg',16,'FALSE',2,NULL),(24,'후방 주차 충돌방지 보조','주차 또는 출차 시 저속 후진 중 후방카메라와 센서로 정후면에 위치한 보행자 및 장애물과의 충돌이 예상되면 운전자에게 경고하고 차량의 제동을 제어하여 충돌방지를 보조합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/102-1.jpg',17,'FALSE',2,NULL),(25,'원격 스마트 주차 보조','주차 보조 기능을 활성화 한 후 주차공간을 발견하게 되면 차량 내 안내에 따라 하차한 다음, 스마트키의 작동 버튼을 누르고만 있으면 차가 스스로 주차합니다. 직각주차 및 평행주차 모두 가능하며, 운전자 탑승 시에도 차량 내부의 작동 버튼을 누르고 있으면 자동 주차 보조를 지원합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/102-2.jpg',17,'FALSE',2,NULL),(26,'후석 승객 알림','초음파 센서를 통해 뒷좌석에 남아있는 승객의 움직임을 감지하여 운전자에게 경고함으로써 부주의에 의한 유아 또는 반려 동물 등의 방치 사고를 예방하는 신기술입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/101-1.jpg',18,'FALSE',2,NULL),(27,'10에어백 시스템(1열 어드밴스드/센터사이드, 1/2열 사이드, 운전석 무릎, 전복대응 커튼)','1열 어드밴스드/센터 사이드, 운전석 무릎,1/2열 사이드, 전복 대응 커튼 에어백으로 탑승자를 보호합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/37.jpg',NULL,'FALSE',3,NULL),(28,'유아용 시트 고정장치(2열 2개/3열 1개)','영·유아용 시트를 간편하고 안전하게 장착할 수 있는 ISO 규격의 카시트를 고정할 수 있는 장치를 2열에 2개, 3열에 1개 총 3개를 적용하여 사고 시 카시트에 탑승한 유아를 보호합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/38.jpg',NULL,'FALSE',3,NULL),(29,'구동선회 제어기능','커브구간에서 선회 가속시 구동력과 제동력을 제어해 언더스티어 현상을 억제하고 차량의 주행 민첩성과 주행 안정성을 향상시키는 토크벡터링 (Torque Vectoring) 시스템입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/39.jpg',NULL,'FALSE',3,NULL),(30,'다중 충돌방지 자동 제동 시스템','차량의 정면 또는 측면 충돌사고로 에어백 전개 시 차량에 적절한 자동 긴급 제동을 통해 2차 사고 및 다중 충돌을 경감시켜줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/40.jpg',NULL,'FALSE',3,NULL),(31,'경사로저속주행장치 ','가파른 경사길에서 사용자가 원하는 일정한 속도로 안전하게 주행 가능합니다. * 버튼 선택 후 속도 제어가 가능합니다.(전진 : 4~40km/h / 후진 : 2.5km/h)','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/dbc_s.jpg',NULL,'FALSE',3,NULL),(32,'LED 주간주행등','주간주행등(DRL)은 낮시간에도 자동으로 켜져 다른 사람들이 차량을 쉽게 볼 수 있도록 합니다. 특히 해질 무렵이나 해뜨기 직전에 차량의 접근을 쉽게 인식하도록 합니다. 차량 시동 후에 자동으로 켜집니다.\n※ 광원의 종류\n- 벌브 : 유리구 안에 있는 필라멘트에 전류를 흘려 빛을 내는 광원입니다.\n- LED : 빛을 내는 반도체 소자로 밝은 빛을 내며 효율이 좋은 광원입니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/42.jpg',NULL,'FALSE',4,NULL),(33,'LED 포지셔닝램프','안개, 야간과 같이 시야확보가 어려울 경우, 차의 존재 및 차폭을 인지할 수 있도록 하는 역할을 합니다.\n※ 광원의 종류\n- 벌브 : 유리구 안에 있는 필라멘트에 전류를 흘려 빛을 내는 광원입니다.\n- LED : 빛을 내는 반도체 소자로 밝은 빛을 내며 효율이 좋은 광원입니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/43.jpg',NULL,'FALSE',4,NULL),(34,'LED 방향지시등\n','차량의 진행 방향을 주변 주행 차량 및 보행자에게 알리는 등화장치입니다.\n※ 광원의 종류\n- 벌브 : 유리구 안에 있는 필라멘트에 전류를 흘려 빛을 내는 광원입니다.\n- LED : 빛을 내는 반도체 소자로 밝은 빛을 내며 효율이 좋은 광원입니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/44.jpg',NULL,'FALSE',4,NULL),(35,'Full LED 헤드램프(프로젝션 타입)\n','야간 운전시 전방에 빛을 비춰 운전자의 시야를 확보할 수 있도록 돕습니다.\n※ 광원의 종류\n- 벌브 : 유리구 안에 있는 필라멘트에 전류를 흘려 빛을 내는 광원입니다.\n- LED : 빛을 내는 반도체 소자로 밝은 빛을 내며 효율이 좋은 광원입니다.\n* Full LED 타입 : 상향등과 하향등이 모두 LED가 적용되어 광도가 우수하고 고급스러운 이미지를 연출합니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/45.jpg',NULL,'FALSE',4,NULL),(36,'아웃사이드 미러(열선, 전동접이, 전동조절, LED 방향지시등)\n','주행 중 후측방을 확인할 수 있도록 차량 좌우측에 부착된 거울입니다.\n방향지시등 : 차량의 진행방향을 주변 주행 차량 및 보행자에게 알리는 램프를 아웃사이드 미러에 적용했습니다.\n열선 기능 : 아웃사이드 미러에 낀 습기를 제거하기 위한 기능입니다.\n전동 접이 기능 : 버튼 조작으로 아웃사이드 미러를 접고 펼 수 있는 기능입니다. 리모컨 키로 도어를 여닫을 때 자동으로 접고 펼 수도 있습니다.\n전동 조절 기능 : 버튼 조작으로 아웃사이드 미러의 화각을 조절하는 기능입니다.\n* 부가기능은 차종별/트림별 상이하게 적용됩니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/46.jpg',NULL,'FALSE',4,NULL),(37,'이중접합 차음유리(윈드실드, 1/2열 도어)\n','두 겹의 유리로 이루어진 전방 유리의 사이에 소음을 흡수하는 전용 차음필름을 삽입하여 엔진 투과음 및 외부 소음이 실내에 유입되는 것을 감소시켜 탑승자의 운전 쾌적성을 향상시킵니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/47.jpg',NULL,'FALSE',4,NULL),(38,'도어 포켓 라이팅(1열)\n','스마트 키를 소지하고 차량에 접근하거나 리모컨 키를 이용하여 차량 도어를 오픈 할 때 아웃사이드 도어핸들 안쪽에 불빛을 비춰 야간에 차량의 문을 쉽게 열 수 있도록 배려한 편의 기능입니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/48.jpg',NULL,'FALSE',4,NULL),(39,'싱글 트윈팁 머플러\n','차량 후면부 하단에 부착되는 배기장치로 차량 후면부와 조화감 있는 이미지로 디자인의 완성도를 높여줍니다. 머플러 부착방식에 따라 명칭이 상이합니다.\n싱글 타입 : 1개의 머플러로 구성\n트윈 타입 : 한쪽에 2개의 머플러로 구성\n듀얼 타입 : 차량 후면부 좌우에 2개의 머플러가 장착됨\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/49.jpg',NULL,'FALSE',4,NULL),(40,'LED 리어콤비램프\n','헤드램프와 통일감 있는 콤비램프 디자인을 적용하였으며 보석 느낌의 인너렌즈를 적용하여 고급스러운 감성품질을 제공합니다.\n※ 광원의 종류\n- 벌브 : 유리구 안에 있는 필라멘트에 전류를 흘려 빛을 내는 광원입니다.\n- LED : 빛을 내는 반도체 소자로 밝은 빛을 내며 효율이 좋은 광원입니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/50.jpg',NULL,'FALSE',4,NULL),(41,'LED 보조제동등\n','기본으로 제공하는 제동등과 별도로 장착되어 브레이크 작동 시 후방 주행 차량에게 제동을 알려 후방 추돌 상황을 방지하는 등화장치입니다.\n※ 광원의 종류\n- 벌브 : 유리구 안에 있는 필라멘트에 전류를 흘려 빛을 내는 광원입니다.\n- LED : 빛을 내는 반도체 소자로 밝은 빛을 내며 효율이 좋은 광원입니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/51.jpg',NULL,'FALSE',4,NULL),(42,'후진가이드램프\n','후진 시 점선 패턴의 가이드 조명 구현을 통해 주변 차량 및 보행자에게 후진 의도를 효과적으로 전달하여 사고를 예방합니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/52.jpg',NULL,'FALSE',4,NULL),(43,'리어 스포일러\n','주행 시 차량 후면에 발생하는 공기의 와류 현상을 없애주는 장치로 차량의 공력 성능을 향상시킵니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/53.jpg',NULL,'FALSE',4,NULL),(44,'크롬 DLO 몰딩\n','차량 도어의 몰딩 부분 소재를 크롬으로 적용하여 고급스러운 감성을 전달합니다.\n차량마다 적용부위의 차이가 있습니다.\n- 벨트라인 : 차량의 측면 윈도우의 하단을 감싸는 몰딩 부분\n- DLO(Day-light opening) : 차량의 측면 윈도우를 감싸는 몰딩 부분\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/54.jpg',NULL,'FALSE',4,NULL),(45,'루프랙\n','차량 위에 짐을 실을 수 있도록 돕는 장치로 화물적재를 위한 보조기구 장착 시 차량 상태 및 안전을 고려하여 장착해야합니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/55.jpg',NULL,'FALSE',4,NULL),(46,'발수 도어(1열)\n','빗물 맺힘이나 서리, 성에 등을 막아주는 발수 적용 유리를 앞도어에 장착하여 운전자의 시계를 확보합니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/58.jpg',23,'FALSE',4,NULL),(47,'퍼들램프','아웃사이드 미러 하단에 바닥을 비추는 퍼들램프를 장착하여 야간 승/하차 시 운전자의 시야 확보에 도움을 줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/puddlelamp_s.jpg',NULL,'FALSE',4,NULL),(48,'캘리그래피 전용 디자인(휠, 라디에이터 그릴 & 가니쉬, 인테이크 그릴, 바디컬러 클래딩, 프론트 & 리어 크롬 스키드 플레이트)','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/calligraphydesign_s.jpg',NULL,'TRUE',4,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/logo-npp.png'),(49,'LED 실내등(맵램프, 룸램프, 선바이저램프, 러기지램프)','차량 실내 전체를 비춰주는 룸램프를 LED로 적용하여 어두운 곳에서의 시인성을 향상시킵니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/60.jpg',NULL,'FALSE',5,NULL),(50,'가죽 스티어링 휠(열선포함)','시동 스위치가 「ON」 또는 엔진이 작동 중일때 스티어링 휠 히터 버튼을 누르면 표시등이 켜지면서 스티어링 휠이 따뜻해집니다. 스티어링 휠 히터 버튼을 누른 후 작동 조건에서 약 30분이 지나면 자동으로 작동을 멈춥니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/61.jpg',NULL,'FALSE',5,NULL),(51,'클러스터(12.3인치 컬러 LCD)','컬러 LCD 클러스터(1,920x720)는 시인성이 높고 정보 파악이 용이하며, 주행모드별 차별화된 그래픽으로 즐거운 드라이빙 환경을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/62.jpg',NULL,'TRUE',5,NULL),(52,'인조가죽 감싸기','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/63.jpg',NULL,'FALSE',5,NULL),(53,'도어 암레스트 리얼스티치','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/64.jpg',NULL,'FALSE',5,NULL),(54,'메탈 페달','자동차의 가속, 브레이크 페달을 메탈로 제작해 드라이빙 시 페달에서 발이 이탈하는 것을 최소화하고 메탈 디자인으로 고급스러운 감성을 전달합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/metalpaddle_s.jpg',NULL,'FALSE',5,NULL),(55,'스웨이드 내장재(헤드라이닝/필라)','가죽 뒷면을 부드럽게 가공하여 고급스러운 느낌을 주는 스웨이드로 완성된 내장재를 차량의 A/B/C필라 및 차량 천장 부분에 적용하여 인테리어에서 고급스러운 감성을 전달합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/swade_s.jpg',NULL,'FALSE',5,NULL),(56,'콘솔 커버 리얼 알루미늄','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/consolcover_s.jpg',NULL,'FALSE',5,NULL),(57,'메탈 리어범퍼스텝','러기지 룸 앞쪽 하단부를 메탈로 만들어 물건을 싣고 내릴 때나 사람이 올라갈 때 차체를 보호해줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/metalrearbumper_s.jpg',18,'FALSE',5,NULL),(58,'메탈 도어스커프','자동차를 타고 내리는 도어의 문틈 하부를 보호하는 도어스커프 부분을 메탈로 만들어 차체를 보호하고 메탈 디자인으로 고급스러운 감성을 전달합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/metaldoorscuff_s.jpg',18,'FALSE',5,NULL),(59,'1열 도어 스피커 메탈 그릴','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/1_doorspeaker_s.jpg',NULL,'FALSE',5,NULL),(60,'퀼팅 인조가죽 감싸기(도어트림)','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/quiltingwrapping_s.jpg',NULL,'FALSE',5,NULL),(61,'앰비언트 무드램프','1/2열 도어 가니쉬 하단과, 1열 콘솔 사이드 부에 은은한 조명을 적용하여 고급감을 전달합니다. AVN 설정 화면에서 고객이 직접 64가지 색상 및 전문가 추천 10가지 색상을 선택할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/quiltingwrapping_s.jpg',NULL,'FALSE',5,NULL),(62,'디지털 센터 미러','디지털 미러로 보다 선명하게 후방을 확인할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/dcm_s.jpg',NULL,'FALSE',5,NULL),(63,'콘솔 사이드 리얼스티치','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/consolside_s.jpg',NULL,'FALSE',5,NULL),(64,'1열 열선/통풍시트','시동이 걸린 상태에서 해당 좌석 히터 스위치를 누르면 강약조절 표시등이 켜져 사용 중임을 나타내고 해당 좌석이 따뜻해지는 열선기능과 시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 통풍기능이 적용되었습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/65.jpg',NULL,'FALSE',6,NULL),(65,'2열 열선시트','3단계로 온도 조절이 가능한 열선시트를 적용하여 쾌적한 승차감을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/66.jpg',NULL,'FALSE',6,NULL),(66,'2열 폴드 & 다이브/슬라이딩 & 리클라이닝 시트','평면형태의 2열 공간을 제공하는 풀플랫 폴딩 2열시트로 차원이 다른 공간/거주성을 확보해 넉넉한 러기지 공간은 물론 프라이빗 스페이스로 활용할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/67.jpg',NULL,'FALSE',6,NULL),(67,'3열 6:4분할 폴딩/리클라이닝 시트','3열 시트 및 러기지 사이드에 적용된 전자식 스위치로 시트를 폴딩 및 리클라이닝하여 화물 적재 시 편리합니다. 또한 좌석 등받이 부분을 후방으로 눕힐 수 있는 리클라이닝 기능을 적용하여 성인 탑승 및 장거리 이동 시 거주 편의성을 높였습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/68.jpg',NULL,'FALSE',6,NULL),(68,'동승석 전동시트(럼버서포트, 레그레스트, 릴렉션 컴포트)','동승석의 시트 포지션을 조정하여 동승자의 체형에 맞는 편안한 자세를 유지할 수 있도록 돕는 기능입니다. 허벅지 길이에 맞게 시트를 2way로 조절하는 레그레스트와 탑승자에게 편안한 휴식을 선사하는 릴렉션 컴포트가 적용되었습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/71.jpg',NULL,'FALSE',6,NULL),(69,'운전석 에르고 모션 시트(18way, 볼스터 전동조절, 레그레스트, 릴렉션 컴포트, 스트레칭 모드)','시트 내 공기주머니를 활용하여 주행 시 안락감과 최적의 착좌감을 구현하는 에르고 모션 시트가 적용되었습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/motionseat_s.jpg',NULL,'FALSE',6,NULL),(70,'스마트 자세제어','스마트 자세제어 시스템은 전동 시트의 장점을 극대화하는 사양으로 사전에 입력한 운전자의 신체 정보에 따라 시트, 스티어링 휠, 사이드 미러, 헤드업 디스플레이의 위치를 제안하는 기능입니다. 또한 장시간 주행 시 시트의 엉덩이와 허리 쿠션을 자동으로 조절해 탑승자의 피로를 줄이고 졸음을 방지하기도 합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/smartcontrol_s.jpg',23,'FALSE',6,NULL),(71,'3열 파워폴딩시트','러기지 사이드에 있는 버튼으로 3열 시트를 접었다 펼 수 있으며, 2열 시트도 조작할 수 있어 화물 적재시나 3열 이용시 사용자의 편의성을 높였습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/101-4.jpg',18,'FALSE',6,NULL),(72,'윙타입 헤드레스트(2열)','좌우가 넓은 윙타입의 헤드레스트를 적용하여 더욱 편리합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/wingtypeheadrest_s.jpg',NULL,'FALSE',6,NULL),(73,'3열 열선시트','시동이 걸린 상태에서 해당 좌석 히터 스위치를 누르면 강약조절 표시등이 켜져 사용 중임을 나타내고 해당 좌석이 따뜻해집니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/101-5',18,'FALSE',6,NULL),(74,'2열 통풍시트','시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/103.jpg',20,'TRUE',6,NULL),(75,'버튼시동 & 스마트키','일반 키와는 달리 휴대만으로 도어(트렁크 포함)를 잠그거나 열고, 엔진 시동을 걸 수 있는 장치입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/72.jpg',NULL,'FALSE',7,NULL),(76,'전동식 파킹 브레이크(오토홀드 포함)','버튼 조작만으로 파킹 브레이크 작동 또는 해제가 가능하며, 정차 시 자동으로 제동상태를 유지하는 오토 홀드 기능 적용으로 편의성을 높였습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/43.jpg',NULL,'FALSE',7,NULL),(77,'패들 쉬프트','운전 중 간단한 조작만으로도 스포티한 수동 변속모드를 지원합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/74.jpg',NULL,'FALSE',7,NULL),(78,'3존 독립제어 풀오토 에어컨(공기청정모드 포함)','원하는 온도를 설정하면 자동으로 설정된 온도로 풍량을 조절하여 쾌적한 실내를 완성합니다. \n- 공기 청정 모드 : 일정 시간 동안 외부 공기를 차단하고 내부 순환모드를 가동하여 실내에서 순환하는 공기를 반복적으로 필터링하여 공기질을 개선시키는 기능입니다. \n- 3존 독립제어 : 운전석이나 동승석 뿐만 아니라 후석에서도 개별 제어가 가능한 에어컨입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/75.jpg',NULL,'FALSE',7,NULL),(79,'공기질 센서','실내 공기질을 실시간으로 확인할 수 있어 공기 청정 모드 사용이나 환기를 유도합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/76.jpg',NULL,'FALSE',7,NULL),(80,'마이크로 에어 필터','미세먼지의 실내 유입의 방지하기 위한 에어필터입니다.\n글로브 박스 뒤쪽에 장착되어 바깥에서 공기 조화 장치를 통하여 차 안으로 들어오는 먼지나 꽃가루 등을 걸러줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/77.jpg',NULL,'FALSE',7,NULL),(81,'자외선 차단 유리(윈드실드)','차량 전방 유리에 자외선을 차단 기능을 적용하여 탑승객은 물론 차량 실내 내장재를 보호합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/78.jpg',NULL,'FALSE',7,NULL),(82,'오토 디포그','전면유리의 김서림을 감지해 스스로 전면 유리 및 앞좌석 유리의 김서림을 없애 운전시야를 확보합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/79.jpg',NULL,'FALSE',7,NULL),(83,'레인센서','스티어링 휠 우측 레버의 와이퍼 조절장치 스위치를 AUTO로 위치하였을 때 주행 중 우천상황을 자동으로 감지하여 와이퍼가 작동 및 조작단계를 자동으로 조절하는 기능입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/80.jpg',NULL,'FALSE',7,NULL),(84,'운전석 공조 연동 자동 제어','시동 후 공조 설정 온도와 실제 온도의 차이가 많이 나는 경우, 공조기 외 스티어링 휠 열선, 시트 열선/통풍을 자동으로 감지하여 통합 제어하는 기능입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/81.jpg',NULL,'FALSE',7,NULL),(85,'USB 충전기(1열 1개, 2열 2개, 3열 2개)','차량용 충전기로서 USB 포트를 통해 각종 스마트폰 및 태블릿 기기 충전이 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/82.jpg',NULL,'FALSE',7,NULL),(86,'파워 아웃렛(1열 1개, 2열 1개, 3열 1개)','시동이 걸린 상태에서 실내에서 전기 제품(예 : 진공청소기, 소형냉장고, 게임기 등)을 사용할 수 있도록 돕습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/83.jpg',NULL,'FALSE',7,NULL),(87,'세이프티 파워 윈도우(1/2열)','유리창이 원터치 자동 닫힘 기능이 작동하여 닫히는 중에 일정한 힘에 의해 막히면 자동으로 닫힘을 멈추고, 일정한 높이만큼 다시 열리는 기능입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/84.jpg',NULL,'FALSE',7,NULL),(88,'후방 모니터','후진 주차 시 디스플레이 오디오 또는 내비게이션 화면에 후방 상황을 표시하여 편의성을 높였습니다. \n- 조향연동 기능 : 스티어링 휠 조정 시 그에 따른 예상 주행 궤적도 같이 표시하여 편의성을 높였습니다. \n- DRM(Driving Rear Monitor) 기능 : 주행 중 후방 영상을 실시간으로 확인하여 룸미러 시야 확보가 불가능 할 때, 후방 상황을 인지할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/85.jpg',NULL,'FALSE',7,NULL),(89,'확산형 루프 에어 벤트','벤트 테두리에 홀(HOLE)을 적용하여 바람이 직접 분사가 아닌 간접(확산) 분사될 수 있도록 구현하여 조금 더 쾌적한 환경을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/86.jpg',NULL,'FALSE',7,NULL),(90,'오토라이트 컨트롤','대시보드 중앙에 위치한 조도센서를 이용하여 외부 밝기에 따라 헤드램프를 자동으로 조절하는 장치입니다. 스티어링 휠 좌측에 위치한 조명 스위치를 「AUTO」 위치에 두면 작동합니다.\n- 대시보드 : 운전석과 조수석 정면에 있으며, 계기판과 센터페시아를 포함합니다.\n※ 스마트/VAN 스마트 트림 선택 시, 위 이미지와는 달리 내장 색상이 블랙으로 적용됩니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/87.jpg',NULL,'FALSE',7,NULL),(91,'스마트키 원격시동','차량 탑승 전 스마트키를 이용하여 원격으로 시동을 걸 수 있으며, 냉/난방 장치는 시동을 끄기 전 설정된 상태로 작동이 가능합니다.\n* 차량 10m 이내에서 도어 잠금 버튼을 누른 후 4초 이내에 원격시동 버튼을 2초 이상 누르면 시동이 걸립니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/88.jpg',NULL,'FALSE',7,NULL),(92,'전방/후방 주차 거리 경고','범퍼에 내장된 초음파 센서로 장애물과의 거리를 감지하여 거리별로 차별화된 경고음을 울려 주차 편의성 및 안전성을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/89.jpg',NULL,'FALSE',7,NULL),(93,'전동식 틸트 & 텔레스코픽 스티어링 휠','조절 스위치를 이용하여 스티어링 휠의 높낮이와 전/후 위치를 조절할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/90.jpg',24,'FALSE',7,NULL),(94,'스마트폰 무선충전','중앙 콘솔에 휴대폰 무선 충전을 위한 시스템이 적용되어 있습니다. 또한 엔진에 시동을 끈 후 충전 패드에 휴대폰이 놓여있는 상태에서 운전석 또는 동승석 도어를 열면 게시판에 휴대폰이 무선 충전기에 있습니다 라는 경고문 및 경고음(음성안내 적용 차량)으로 알려줍니다.\n* 무선 충전 시스템은 Qi를 지원하는 휴대폰 한 대를 대상으로 무선충전을 지원하며, Qi를 지원하는 휴대폰은 휴대폰 제조사를 통해 확인 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/91.jpg',23,'FALSE',7,NULL),(95,'스마트 파워 테일게이트','스위치 및 스마트키 버튼으로 테일게이트 개방이 가능하며, 설정을 통해 개폐 속도 조절 및 열림 높이 조절이 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/92.jpg',NULL,'FALSE',7,NULL),(96,'서라운드 뷰 모니터','차량 앞/뒤/좌/우 360도 모든 상황을 AVN화면을 통해 볼 수 있는 장치로 고화질 카메라 및 디지털 영상 전송 방식을 적용하여 영상 경계선 없이 선명하고 깨끗한 화질을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/93.jpg',NULL,'FALSE',7,NULL),(97,'후측방 모니터','방향지시등 스위치 조작과 연동해 차로 변경 시 기존 아웃사이드 미러 대비 더 넓은 후측방 영역을 클러스터에 표시하여 안전한 주행을 도와줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/94.jpg',NULL,'FALSE',7,NULL),(98,'디지털 키 2 터치','스마트폰으로 차량 외부에서 도어를 열고 시동을 걸 수 있습니다. 사용 권한을 다수의 사람과 공유하여 보다 편리함을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/digitalkey_s.jpg',NULL,'FALSE',7,NULL),(99,'2열 수동식 도어커튼','뒷좌석 유리를 통해 들어오는 외부 광선을 차단할 때 사용하는 수동식 커튼입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/manualcurtain_s.jpg',NULL,'FALSE',7,NULL),(100,'전후석 통합 터치 공조 컨트롤','터치식으로 2열 공조 제어까지 가능하여 편리한 터치 타입 공조 패널에 공기질 센서, 마이크로 에어 필터, 운전석 공조 연동 자동 제어 등의 공기청정모드가 적용되어 실내 미세먼지를 획기적으로 저감하며 쾌적한 실내 환경을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/81.jpg',NULL,'TRUE',7,NULL),(101,'헤드업 디스플레이','주요 주행 정보를 전면 윈드실드에 표시하며, 밝기가 최적화되어 주간에도 시인성이 뛰어납니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/101-6.jpg',18,'TRUE',7,NULL),(102,'파워 아웃렛(콘솔 내부 1개)','시동이 걸린 상태에서 실내에서 전기 제품(예 : 진공청소기, 소형냉장고, 게임기 등)을 사용할 수 있도록 돕습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/poweroutlet_consol_s.jpg',NULL,'FALSE',7,NULL),(103,'USB 충전기(콘솔 내부 1개)','차량용 충전기로서 USB 포트를 통해 각종 스마트폰 및 태블릿 기기 충전이 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/usbcharger_consol_s.jpg',NULL,'FALSE',7,NULL),(104,'12.3인치 내비게이션(블루링크, 폰 프로젝션, 현대 카페이)','와이드하고 품격 있는 실내공간을 연출하고 고해상도 대화면으로 뛰어난 시인성과 최첨단 인포테인먼트 기능을 제공합니다.주요기능 : 대화면 HD급 고해상도(1,920x720) 모니터, 내비게이션 자동 무선 업데이트, 개인화 프로필, 서버형 음성인식 시스템, 블루링크','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/95.jpg',NULL,'FALSE',8,NULL),(105,'하이패스','유료 도로로 진출입시 통행료가 자동결제 되는 장치입니다. 하이패스 시스템은 시동이 걸려있는 상태에서만 작동합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/96.jpg',NULL,'FALSE',8,NULL),(106,'후석 대화모드','운전자의 음성을 운전석 마이크를 통하여 뒷좌석 동승자와의 대화 편의성을 높였습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/97.jpg',NULL,'FALSE',8,NULL),(107,'후석 취침모드','뒷좌석 동승자가 취침 시, 뒷좌석 스피커가 모두 음소거가 되고 운전석 스피커로만 음원이 출력되어, 뒷좌석을 조용한 공간으로 활용할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/98.jpg',NULL,'FALSE',8,NULL),(108,'멀티미디어용 USB 단자(1열 1개)','MP3, USB 저장 장치 또는 iPod 등 외부 음향 기기(또는 음악/동영상 등 미디어 파일 저장 장치)를 차량에 연결하여 차량 스피커를 통하여 음악을 듣거나 차량 오디오 또는 인포테인먼트 시스템으로 재생할 수 있는 편의 장치 입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/100.jpg',NULL,'FALSE',8,NULL),(109,'KRELL 프리미엄 사운드(12스피커, 외장앰프)','음향의 세밀함과 공간감, 다이내믹함을 추구하며 세계 유수의 사운드 어워드를 수상한 세계적인 하이앤드 오디오 시스템 브랜드인 크렐 사운드 시스템을 적용하였습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/krellsound_s.jpg',19,'TRUE',8,NULL),(110,'액티브 노이즈 컨트롤','실시간으로 차량 내부의 엔진 소음을 분석해 반대 위상의 음파를 출력하여 소음을 저감하고 보다 정숙한 실내 공간을 만들어줍니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/activenoisecontrol_s.jpg',19,'FALSE',8,NULL),(111,'러기지 스크린','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/luggagescreen_m.jpg',9,'FALSE',7,NULL),(112,'러기지 네트','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/luggagenet_m.jpg',9,'FALSE',7,NULL),(113,'LED 도어 스팟 램프','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/doorspotlamp_m.jpg',9,'FALSE',5,NULL),(114,'LED 풋무드 램프','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/footmoodlamp_m.jpg',9,'FALSE',5,NULL),(115,'견인력(750kg → 2,000kg)','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/tractionpower_m.jpg',10,'FALSE',1,NULL),(116,'셀프레벨라이저','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/selflevelizer_m.jpg',10,'FALSE',1,NULL),(117,'토우히치','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/towhitch_m.jpg',10,'FALSE',4,NULL),(118,'듀얼 머플러 패키지','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/107.jpg',14,'FALSE',4,NULL),(119,'러기지 프로텍션 매트','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/112-1.jpg',8,'FALSE',7,NULL),(120,'플로어매트 1,2열','※ 프로텍션 매트 패키지는 사용자의 신발 재질에 따라 일부 미끄러짐이 발생할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/112-2.jpg',8,'FALSE',5,NULL),(121,'20인치 다크 스퍼터링 휠','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/113.jpg',11,'FALSE',4,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/logo-npp.png'),(122,'20인치 블랙톤 전면 가공 휠','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/114.jpg',13,'FALSE',4,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/logo-npp.png'),(123,'알콘(alcon) 단조 브레이크','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/115-1.jpg',13,'FALSE',4,NULL),(124,'2열 센터 콘솔(양문형 암레스트, 공기청정기, 냉온장 컵홀더, 앰비언트 무드램프, 터치 스위치 포함)','양문형 2열 센터 콘솔 암레스트로 콘솔 개폐시 편의성이 우수합니다. 또한 2열 콘솔 부위에 앰비언트 무드램프를 더하여 2열 차별화와 고급감을 향상시켰습니다.\n- 공기청정기 : H13등급 헤파 필터와 활성탄 및 제올라이트 필터를 적용하여 미세먼지와 유해가스를 효과적으로 필터링하여 2열 좌석 중심으로 신선한 공기를 공급합니다. 미세먼지 센서로(PM2.5 레이저) 실내 미세먼지를 측정하여 풍량을 자동 제어합니다.\n- 터치 스위치 : 콘솔 공기청정기, 2열 냉온컵홀더, 후석엔터테인먼트 시스템을 제어 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/2_centerconsol_m.jpg',15,'FALSE',5,NULL),(125,'VIP 전용 고급형 카매트(1/2/3열)','두터운 두께와 더욱 촘촘한 융 원단을 적용하여 보다 고급스러운 인테리어 감성을 제공합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/vipcarmat_m.jpg',15,'FALSE',5,NULL),(126,'스피커 내장형 윙타입 헤드레스트(2열)','저음역을 강화하고 플랫 주파수 응답 성능을 확보하여 풍부한 베이스와 고퀄리티 사운드 감상이 가능합니다. 또한 후석 엔터테인먼트 시스템과 연동되어 좌/우 헤드레스트 각각 개별적인 사운드 감상이 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/speakerwingtypeheadrest_m.jpg',15,'FALSE',5,NULL),(127,'도어트림 스마트폰 무선충전기(2열)','뒷좌석 도어에 별도의 케이블 없이 무선으로 스마트폰 충전이 가능한 무선 충전기를 장착하여 뒷좌석 탑승객의 편의를 높였습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/doorwirelesscharger_m.jpg',15,'FALSE',5,NULL),(128,'후석 엔터테인먼트 시스템(2열)','- ','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/rearentertain_m.jpg',15,'FALSE',5,NULL),(129,'다크 크롬 라디에이터 그릴',NULL,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/41.jpg',NULL,'FALSE',NULL,NULL),(130,'메탈페인트 스키드 플레이트',NULL,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/56.jpg',NULL,'FALSE',NULL,NULL),(131,'20인치 알로이 휠 & 타이어',NULL,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/57.jpg',21,'FALSE',4,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/logo-npp.png'),(132,'베젤리스 인사이드 미러','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/59.jpg',NULL,'FALSE',4,NULL),(133,'퀼팅 나파가죽 시트(블랙/버건디/웜그레이)',NULL,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/qualting_napa.jpg',NULL,'FALSE',5,NULL),(134,'빌트인 공기청정기','※ 빌트인 공기청정기 전용 에어필터의 권장 사용기간은 6개월이며(하루 2시간 사용 기준), 에어필터는 현대 Shop(Shop.Hyundai.com) 현대브랜드관을 통해 개별 품목 단위로 구매 가능합니다.\n\n','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/108.jpg',4,'FALSE',5,NULL),(135,'듀얼 와이드 선루프','후석에 고정 글라스를 적용한 듀얼 파노라믹 선루프로 2/3열의 탑승객에게도 넓은 개방감을 선사합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/104.jpg',2,'FALSE',7,NULL),(136,'천연가죽 시트(블랙)','팰리세이드는 옵션에 따라 인조가죽, 가죽, 나파가죽, 퀼팅 나파가죽 시트를 선택할 수 있습니다.\n - 인조가죽 시트 : 합성섬유를 이용하여 가죽의 질감을 구현한 인조가죽으로 제작된 시트입니다.\n - 가죽 시트 : 실제 가죽으로 제작되어 편안하며 고급스러운 착좌감을 제공합니다.\n - 나파가죽 시트 : 가죽 표면을 코팅처리하여 가죽의 내구성은 높이면서도 부드러운 감촉을 선사하는 시트입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/realleatherblack.jpg',NULL,'FALSE',5,NULL),(137,'운전석 전동시트(10way, 4way 럼버서포트, 쿠션 익스텐션, 자세 메모리 시스템)','운전석의 시트 포지션을 조정하여 운전자의 체형에 맞는 편안한 자세를 유지할 수 있도록 돕는 기능입니다.\n - 10way 전동시트 : 운전석 좌하단에 위치한 조작부로 8방향으로 조절 기능(시트백 기울기, 시트 앞/뒤 이동, 쿠션부 앞/뒤 높이 조절)과 허리 지지대 조절 기능을 전동 방식으로 조절합니다.\n - 4way 럼버서포트 : 허리 지지대 조절 기능을 4 방향으로 조절합니다.\n - 쿠션 익스텐션 : 운전자의 허벅지 길이에 맞게 시트 하단부를 조절하는 쿠션 익스텐션이 적용되었습니다.\n - 자세 메모리 시스템 : 운전자가 설정한 자세를 2개까지 기억하는 운전석 자세 메모리 시스템을 적용하여 편의성을 높였습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/70.jpg',NULL,'FALSE',5,NULL),(138,'사이드스텝','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/109.jpg',5,'FALSE',7,NULL),(139,'차량 보호 필름','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/111.jpg',7,'FALSE',4,NULL),(140,'적외선 무릎워머','※ 적외선 무릎 워머 상품은 사용자의 자세와 체형에 따라 효과가 상이할 수 있습니다.\n ※ 적외선 무릎 워머 상품의 발열부는 고온으로 신체 접촉 시 화상 위험이 있으므로 닿지 않도록 주의바랍니다.\n ※ 적외선 무릎 워머 상품은 실내온도에 따라 발열 온도가 조절되며, 30분 연속 작동 됩니다.\n ※ 적외선 무릎 워머는 전동식 틸트 & 텔레스코픽 스티어링 휠 적용 시 선택이 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/110.jpg',6,'FALSE',7,NULL),(141,'메탈페이트 스키드 플레이트','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/56.jpg',NULL,'FALSE',4,NULL),(142,'클러스터(4.2인치 컬러 LCD)','계기판 중앙에 4.2인치의 컬러 LCD 화면을 탑재하여 주행 중 외부 온도, 연비 정보, 지능형 안전 기술 작동 상태 등 다양한 차량의 상태를 운전자가 직관적으로 확인할 수 있도록 돕는 장치입니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/4.2cluster_s.jpg',NULL,'FALSE',8,NULL),(143,'수동식 틸트 & 텔레스 코픽 스티어링 휠','스티어링 휠의 높이를 신체에 알맞게 조절하기 위한 장치로 조절 레버를 아래로 내린 후 상하 또는 앞뒤로 움직여 위치를 지정합니다. 조절 후에는 조절 레버를 원위치 시켜 스티어링 휠을 고정합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/manualsteering_s.jpg',NULL,'FALSE',4,NULL),(144,'일반 오디오 시스템(8스피커, 블루투스 핸즈프리)','차량 내부 공간의 음향 특성에 맞게 세심하게 조정된 8개의 스피커를 통하여 기본에 충실한 사운드를 감상할 수 있습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/99.jpg',NULL,'FALSE',8,NULL),(145,'빌트인 캠(보조배터리 포함)','빌트인 적용된 영상기록장치로, 내비게이션 화면을 통해 영상 확인 및 앱 연동을 통해 영상 확인 및 SNS 공유가 가능합니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/105.jpg',1,'FALSE',3,NULL),(146,'냉온장 컵홀더','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/cupholder_s.jpg',3,'TRUE',7,NULL),(147,'18인치 알로이 휠 & 타이어','-','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18alloywheel.jpg',NULL,'FALSE',4,NULL),(148,'운전석 전동시트(8way, 럼버서포트)','운전석의 시트 포지션을 조정하여 운전자의 체형에 맞는 편안한 자세를 유지할 수 있도록 돕는 기능입니다. 팰리세이드는 옵션에 따라 10way 전동 시트와 12way 전동시트(럼버서포트 포함) & 2way 쿠션 익스텐션을 선택할 수 있습니다.\n10way 전동시트 : 운전석 좌하단에 위치한 조작부로 8방향으로 조절 기능(시트백 기울기, 시트 앞/뒤 이동, 쿠션부 앞/뒤 높이 조절)과 허리 지지대 조절 기능을 전동 방식으로 조절합니다.\n12way 전동시트(럼버서포트 포함) & 2way 쿠션 익스텐션 : 운전석 좌하단에 위치한 조작부로 8방향으로 조절 기능(시트백 기울기, 시트 앞/뒤 이동, 쿠션부 앞/뒤 높이 조절)과 4방향으로 허리 지지대를 조절하며 운전자의 허벅지 길이에 맞게 시트 하단부를 조절하는 쿠션 익스텐션이 적용되었습니다.','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/70.png',NULL,'FALSE',6,NULL);
/*!40000 ALTER TABLE `FUNCTIONS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `INTERIOR_COLOR`
--

DROP TABLE IF EXISTS `INTERIOR_COLOR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `INTERIOR_COLOR` (
  `interior_color_id` bigint NOT NULL AUTO_INCREMENT,
  `color` varchar(20) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `interior_img_url` text,
  `color_img_url` text,
  `purchase_rate` varchar(20) DEFAULT NULL,
  `trim_exterior_color_id` bigint DEFAULT NULL,
  PRIMARY KEY (`interior_color_id`),
  KEY `FK_TRIM_EXTERIOR_COLOR_TO_INTERIOR_COLOR_1` (`trim_exterior_color_id`),
  CONSTRAINT `FK_TRIM_EXTERIOR_COLOR_TO_INTERIOR_COLOR_1` FOREIGN KEY (`trim_exterior_color_id`) REFERENCES `TRIM_EXTERIOR_COLOR` (`trim_exterior_color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `INTERIOR_COLOR`
--

LOCK TABLES `INTERIOR_COLOR` WRITE;
/*!40000 ALTER TABLE `INTERIOR_COLOR` DISABLE KEYS */;
INSERT INTO `INTERIOR_COLOR` VALUES (1,'블랙(고급)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png','구매자 30%가 선택',1),(2,'블랙(고급)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png','구매자 30%가 선택',2),(3,'블랙(고급)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png','구매자 30%가 선택',3),(4,'블랙(고급)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png','구매자 30%가 선택',4),(5,'블랙(고급)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png','구매자 30%가 선택',5),(6,'블랙(고급)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png','구매자 30%가 선택',6),(7,'블랙(고급)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png','구매자 30%가 선택',7),(8,'블랙원톤(블랙에디션 전용)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/118-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/118-1.png','구매자 20%가 선택',1),(9,'블랙원톤(블랙에디션 전용)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/118-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/118-1.png','구매자 20%가 선택',7),(10,'브라운',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png','구매자 35%가 선택',1),(11,'브라운',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png','구매자 35%가 선택',2),(12,'브라운',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png','구매자 35%가 선택',3),(13,'브라운',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png','구매자 35%가 선택',4),(14,'브라운',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png','구매자 35%가 선택',5),(15,'브라운',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png','구매자 35%가 선택',6),(16,'브라운',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png','구매자 35%가 선택',7),(17,'네이비/웜그레이 투톤',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','구매자 15%가 선택',1),(18,'네이비/웜그레이 투톤',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','구매자 15%가 선택',2),(19,'네이비/웜그레이 투톤',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','구매자 15%가 선택',3),(20,'네이비/웜그레이 투톤',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','구매자 15%가 선택',4),(21,'네이비/웜그레이 투톤',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','구매자 15%가 선택',5),(22,'네이비/웜그레이 투톤',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','구매자 15%가 선택',6),(23,'네이비/웜그레이 투톤',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png','구매자 15%가 선택',7),(24,'네이비',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png','구매자 50%가 선택',8),(25,'네이비',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png','구매자 50%가 선택',9),(26,'네이비',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png','구매자 50%가 선택',10),(27,'네이비',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png','구매자 50%가 선택',11),(28,'네이비',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png','구매자 50%가 선택',12),(29,'네이비',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png','구매자 50%가 선택',13),(30,'블랙',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png','구매자 45%가 선택',8),(31,'블랙',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png','구매자 45%가 선택',9),(32,'블랙',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png','구매자 45%가 선택',10),(33,'블랙',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png','구매자 45%가 선택',11),(34,'블랙',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png','구매자 45%가 선택',12),(35,'블랙',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png','구매자 45%가 선택',13),(36,'버건디',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png','구매자 5%가 선택',8),(37,'버건디',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png','구매자 5%가 선택',9),(38,'버건디',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png','구매자 5%가 선택',10),(39,'버건디',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png','구매자 5%가 선택',11),(40,'버건디',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png','구매자 5%가 선택',12),(41,'버건디',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png','구매자 5%가 선택',13),(42,'인조가죽(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png','구매자 16%가 선택',20),(43,'인조가죽(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png','구매자 16%가 선택',21),(44,'인조가죽(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png','구매자 16%가 선택',22),(45,'인조가죽(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png','구매자 16%가 선택',23),(46,'인조가죽(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png','구매자 16%가 선택',24),(47,'인조가죽(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png','구매자 16%가 선택',25),(48,'퀼팅천연(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png','구매자 20%가 선택',14),(49,'퀼팅천연(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png','구매자 20%가 선택',15),(50,'퀼팅천연(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png','구매자 20%가 선택',16),(51,'퀼팅천연(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png','구매자 20%가 선택',17),(52,'퀼팅천연(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png','구매자 20%가 선택',18),(53,'퀼팅천연(블랙)',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png','구매자 20%가 선택',19),(54,'쿨그레이',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png','구매자 3%가 선택',14),(55,'쿨그레이',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png','구매자 3%가 선택',15),(56,'쿨그레이',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png','구매자 3%가 선택',16),(57,'쿨그레이',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png','구매자 3%가 선택',17),(58,'쿨그레이',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png','구매자 3%가 선택',18),(59,'쿨그레이',0,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-2.png','https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png','구매자 3%가 선택',19);
/*!40000 ALTER TABLE `INTERIOR_COLOR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OPTION`
--

DROP TABLE IF EXISTS `OPTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OPTION` (
  `option_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `description` text,
  `purchase_rate` varchar(20) DEFAULT NULL,
  `option_category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`option_id`),
  KEY `FK_OPTION_CATEGORY_TO_OPTION_1` (`option_category_id`),
  CONSTRAINT `FK_OPTION_CATEGORY_TO_OPTION_1` FOREIGN KEY (`option_category_id`) REFERENCES `OPTION_CATEGORY` (`option_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OPTION`
--

LOCK TABLES `OPTION` WRITE;
/*!40000 ALTER TABLE `OPTION` DISABLE KEYS */;
INSERT INTO `OPTION` VALUES (1,'빌트인 캠(보조배터리 포함)',690000,'빌트인 캠을 통해 방금 촬영된 운전 영상을 어플로 바로 확인할 수 있어요.','구매자 30%가 선택',1),(2,'듀얼와이드 선루프',890000,'후석에 고정 글라스를 적용한 듀얼 파노라믹 선루프로 2/3열의 탑승객에게도 넓은 개방감을 선사합니다.','구매자 10%가 선택',4),(3,'냉온장 컵홀더',490000,'-','구매자 20%가 선택',4),(4,'빌트인 공기청정기',400000,'더 깨끗한 차량 내 공기를 위해\n빌트인 공기 청정기로 미세먼지 걱정 없이 드라이빙 하세요.','구매자 20%가 선택',4),(5,'사이드스텝',350000,'더욱 편안한 승하차를 원한다면,\n사이드 스텝을 이용하여 편하게 승하차를 할 수 있어요.','구매자 65%가 선택',4),(6,'적외선 무릎워머',300000,'무릎까지 따뜻한 드라이빙을 원한다면,\n적외선 무릎 워머를 사용해보세요.','구매자 20%가 선택',4),(7,'차량 보호 필름',490000,'흠집으로 부터 차량을 보호하고 싶다면?\n차량 보호 필름을 통해 내 차를 지켜보세요.','구매자 30%가 선택',3),(8,'프로텍션 매트 패키지 I',250000,'흠집없이 내 차에 짐을 싣고 싶다면?\n프로텍션 매트 패기지1로 흠집 걱정 없이 짐을 실어보세요.','구매자 10%가 선택',3),(9,'H Genuine Accessories 라이프스타일',690000,'-','구매자 10%가 선택',2),(10,'H Genuine Accessories 트레일러 & 셀',1580000,'※ 트레일러 패키지 선택 시 연결장치 견인 능력은 750kg에서 2,000kg으로 증대됩니다.\n※ 트레일러 패키지의 최대 견인 중량은 2,000kg(피견인장치관성브레이크 적용 시), 수직하중은 100kg입니다.\n※ 트레일러 패키지의 커넥터는 유럽식 13PIN(ISO 11446) 적용되어 있으며 토우볼 지름은 50mm입니다\n.※ 트레일러 패키지의 토우모드는 가솔린 3.8 HTRAC 사양에 한하여 적용됩니다.','구매자 10%가 선택',2),(11,'20인치 다크 스퍼터링 휠',840000,'현대자동차의 기술력과 노하우가 결합된 커스터마이징 브랜드 N 퍼포먼스의 다크 스파터링 휠','구매자 15%가 선택',2),(12,'테스트',123123,'123123','123',1),(13,'알콘(alcon) 단조 브레이크 &amp; 20인치 휠',3660000,'현대자동차의 기술력과 노하우가 결합된 커스터마이징 브랜드 N 퍼포먼스의 알콘(alcon)단조 브레이크 & 20인치 휠 패키지','구매자 10%가 선택',2),(14,'듀얼 머플러 패키지',840000,'싱글 머플러가 아쉽다면?\n듀얼 머플러 패키지를 통해 멋스러운 드라이빙 감성을 더해보세요.','구매자 10%가 선택',2),(15,'VIP 패키지',5740000,'보다 고급스러운 인테리어를 원한다면 캘리그라피만의 VIP 패키지를 통해 2열 추가 편의 기능과 더욱 고급화된 실내 인테리어를 적용할 수 있어요','구매자 10%가 선택',2),(16,'현대스마트센스 I',790000,'\"운전 중 돌발 상황에 도움이 필요하다면?\n현대스마트센스 1의 차량 자동 제어를 통해 도움을 받을 수 있어요.\"\n','구매자 10%가 선택',1),(17,'주차보조 시스템 II',690000,'주차가 어려우신가요?\n‘주차보조 시스템 2’와 함께 안전하게 주차할 수 있어요.','구매자 10%가 선택',1),(18,'컴포트 II',1090000,'안전한 차량 경험을 위한 여섯 가지 기능 모음\n컴포트 2를 통해 편리한 드라이빙을 즐겨보세요.','구매자 10%가 선택',1),(19,'KRELL 사운드 패키지',690000,'-','구매자 10%가 선택',4),(20,'2열 통풍시트',400000,'시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면 표시등이 켜지면서 해당 좌석에 바람이 나오는 편의장치입니다.','구매자 10%가 선택',4),(21,'20인치 알로이 휠 & 타이어',0,'-','구매자 10%가 선택',2),(22,'주차보조 시스템 I',1680000,'-','구매자 10%가 선택',1),(23,'컨비니언스',790000,'-','구매자 10%가 선택',1),(24,'컴포트 I',890000,'-','구매자 10%가 선택',1);
/*!40000 ALTER TABLE `OPTION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OPTION_CATEGORY`
--

DROP TABLE IF EXISTS `OPTION_CATEGORY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OPTION_CATEGORY` (
  `option_category_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`option_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OPTION_CATEGORY`
--

LOCK TABLES `OPTION_CATEGORY` WRITE;
/*!40000 ALTER TABLE `OPTION_CATEGORY` DISABLE KEYS */;
INSERT INTO `OPTION_CATEGORY` VALUES (1,'안전'),(2,'스타일&퍼포먼스'),(3,'차량 보호'),(4,'편의');
/*!40000 ALTER TABLE `OPTION_CATEGORY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OPTION_STATUS`
--

DROP TABLE IF EXISTS `OPTION_STATUS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OPTION_STATUS` (
  `option_status_id` bigint NOT NULL AUTO_INCREMENT,
  `selected_option_id` bigint DEFAULT NULL,
  `not_activated_option_id` bigint DEFAULT NULL,
  `selected_engine_id` bigint DEFAULT NULL,
  PRIMARY KEY (`option_status_id`),
  KEY `FK_ENGINE_TO_OPTION_STATUS_1` (`selected_engine_id`),
  KEY `FK_OPTION_TO_OPTION_STATUS_1` (`selected_option_id`),
  KEY `FK_OPTION_TO_OPTION_STATUS_2` (`not_activated_option_id`),
  CONSTRAINT `FK_ENGINE_TO_OPTION_STATUS_1` FOREIGN KEY (`selected_engine_id`) REFERENCES `ENGINE` (`engine_id`),
  CONSTRAINT `FK_OPTION_TO_OPTION_STATUS_1` FOREIGN KEY (`selected_option_id`) REFERENCES `OPTION` (`option_id`),
  CONSTRAINT `FK_OPTION_TO_OPTION_STATUS_2` FOREIGN KEY (`not_activated_option_id`) REFERENCES `OPTION` (`option_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OPTION_STATUS`
--

LOCK TABLES `OPTION_STATUS` WRITE;
/*!40000 ALTER TABLE `OPTION_STATUS` DISABLE KEYS */;
INSERT INTO `OPTION_STATUS` VALUES (1,NULL,14,2),(2,15,4,NULL),(3,15,6,NULL),(4,15,8,NULL),(5,9,14,NULL),(6,11,13,NULL),(7,13,11,NULL);
/*!40000 ALTER TABLE `OPTION_STATUS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRIM`
--

DROP TABLE IF EXISTS `TRIM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRIM` (
  `trim_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `img_url` text,
  `description` text,
  `purchase_rate` varchar(20) DEFAULT NULL,
  `car_type_id` bigint DEFAULT NULL,
  PRIMARY KEY (`trim_id`),
  KEY `FK_CAR_TYPE_TO_TRIM_1` (`car_type_id`),
  CONSTRAINT `FK_CAR_TYPE_TO_TRIM_1` FOREIGN KEY (`car_type_id`) REFERENCES `CAR_TYPE` (`car_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRIM`
--

LOCK TABLES `TRIM` WRITE;
/*!40000 ALTER TABLE `TRIM` DISABLE KEYS */;
INSERT INTO `TRIM` VALUES (1,'Exclusive',38960000,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/exclusive.png','실용적이고 기본적인 기능을 갖춘 베이직 트림','구매자 10%가 선택',1),(2,'Le Blanc',41980000,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/leblanc.png','실용적이고 기본적인 기능을 갖춘 베이직 트림','NEW',1),(3,'Prestige',46240000,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/prestige.png','실용적이고 기본적인 기능을 갖춘 베이직 트림','구매자 15%가 선택',1),(4,'Calligraphy',51060000,'https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/calligraphy.png','실용적이고 기본적인 기능을 갖춘 베이직 트림','구매자 75%가 선택',1);
/*!40000 ALTER TABLE `TRIM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRIM_BODY_TYPE`
--

DROP TABLE IF EXISTS `TRIM_BODY_TYPE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRIM_BODY_TYPE` (
  `trim_body_type_id` bigint NOT NULL AUTO_INCREMENT,
  `trim_id` bigint DEFAULT NULL,
  `body_type_id` bigint DEFAULT NULL,
  PRIMARY KEY (`trim_body_type_id`),
  KEY `FK_BODY_TYPE_TO_TRIM_BODY_TYPE_1` (`body_type_id`),
  KEY `FK_TRIM_TO_TRIM_BODY_TYPE_1` (`trim_id`),
  CONSTRAINT `FK_BODY_TYPE_TO_TRIM_BODY_TYPE_1` FOREIGN KEY (`body_type_id`) REFERENCES `BODY_TYPE` (`body_type_id`),
  CONSTRAINT `FK_TRIM_TO_TRIM_BODY_TYPE_1` FOREIGN KEY (`trim_id`) REFERENCES `TRIM` (`trim_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRIM_BODY_TYPE`
--

LOCK TABLES `TRIM_BODY_TYPE` WRITE;
/*!40000 ALTER TABLE `TRIM_BODY_TYPE` DISABLE KEYS */;
INSERT INTO `TRIM_BODY_TYPE` VALUES (1,1,1),(2,1,2),(3,2,1),(4,2,2),(5,3,1),(6,3,2),(7,4,1),(8,4,2);
/*!40000 ALTER TABLE `TRIM_BODY_TYPE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRIM_DRIVING_METHOD`
--

DROP TABLE IF EXISTS `TRIM_DRIVING_METHOD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRIM_DRIVING_METHOD` (
  `trim_driving_method_id` bigint NOT NULL AUTO_INCREMENT,
  `trim_id` bigint DEFAULT NULL,
  `driving_method_id` bigint DEFAULT NULL,
  PRIMARY KEY (`trim_driving_method_id`),
  KEY `FK_DRIVING_METHOD_TO_TRIM_DRIVING_METHOD_1` (`driving_method_id`),
  KEY `FK_TRIM_TO_TRIM_DRIVING_METHOD_1` (`trim_id`),
  CONSTRAINT `FK_DRIVING_METHOD_TO_TRIM_DRIVING_METHOD_1` FOREIGN KEY (`driving_method_id`) REFERENCES `DRIVING_METHOD` (`driving_method_id`),
  CONSTRAINT `FK_TRIM_TO_TRIM_DRIVING_METHOD_1` FOREIGN KEY (`trim_id`) REFERENCES `TRIM` (`trim_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRIM_DRIVING_METHOD`
--

LOCK TABLES `TRIM_DRIVING_METHOD` WRITE;
/*!40000 ALTER TABLE `TRIM_DRIVING_METHOD` DISABLE KEYS */;
INSERT INTO `TRIM_DRIVING_METHOD` VALUES (1,1,1),(2,1,2),(3,2,1),(4,2,2),(5,3,1),(6,3,2),(7,4,1),(8,4,2);
/*!40000 ALTER TABLE `TRIM_DRIVING_METHOD` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRIM_ENGINE`
--

DROP TABLE IF EXISTS `TRIM_ENGINE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRIM_ENGINE` (
  `trim_engine_id` bigint NOT NULL AUTO_INCREMENT,
  `trim_id` bigint DEFAULT NULL,
  `engine_id` bigint DEFAULT NULL,
  PRIMARY KEY (`trim_engine_id`),
  KEY `FK_ENGINE_TO_TRIM_ENGINE_1` (`engine_id`),
  KEY `FK_TRIM_TO_TRIM_ENGINE_1` (`trim_id`),
  CONSTRAINT `FK_ENGINE_TO_TRIM_ENGINE_1` FOREIGN KEY (`engine_id`) REFERENCES `ENGINE` (`engine_id`),
  CONSTRAINT `FK_TRIM_TO_TRIM_ENGINE_1` FOREIGN KEY (`trim_id`) REFERENCES `TRIM` (`trim_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRIM_ENGINE`
--

LOCK TABLES `TRIM_ENGINE` WRITE;
/*!40000 ALTER TABLE `TRIM_ENGINE` DISABLE KEYS */;
INSERT INTO `TRIM_ENGINE` VALUES (1,1,1),(2,1,2),(3,2,1),(4,2,2),(5,3,1),(6,3,2),(7,4,1),(8,4,2);
/*!40000 ALTER TABLE `TRIM_ENGINE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRIM_EXTERIOR_COLOR`
--

DROP TABLE IF EXISTS `TRIM_EXTERIOR_COLOR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRIM_EXTERIOR_COLOR` (
  `trim_exterior_color_id` bigint NOT NULL AUTO_INCREMENT,
  `trim_id` bigint DEFAULT NULL,
  `exterior_color_id` bigint DEFAULT NULL,
  PRIMARY KEY (`trim_exterior_color_id`),
  KEY `FK_EXTERIOR_COLOR_TO_TRIM_EXTERIOR_COLOR_1` (`exterior_color_id`),
  KEY `FK_TRIM_TO_TRIM_EXTERIOR_COLOR_1` (`trim_id`),
  CONSTRAINT `FK_EXTERIOR_COLOR_TO_TRIM_EXTERIOR_COLOR_1` FOREIGN KEY (`exterior_color_id`) REFERENCES `EXTERIOR_COLOR` (`exterior_color_id`),
  CONSTRAINT `FK_TRIM_TO_TRIM_EXTERIOR_COLOR_1` FOREIGN KEY (`trim_id`) REFERENCES `TRIM` (`trim_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRIM_EXTERIOR_COLOR`
--

LOCK TABLES `TRIM_EXTERIOR_COLOR` WRITE;
/*!40000 ALTER TABLE `TRIM_EXTERIOR_COLOR` DISABLE KEYS */;
INSERT INTO `TRIM_EXTERIOR_COLOR` VALUES (1,4,1),(2,4,2),(3,4,3),(4,4,4),(5,4,5),(6,4,6),(7,4,7),(8,3,1),(9,3,2),(10,3,4),(11,3,5),(12,3,6),(13,3,7),(14,2,1),(15,2,2),(16,2,4),(17,2,5),(18,2,6),(19,2,7),(20,1,1),(21,1,2),(22,1,4),(23,1,5),(24,1,6),(25,1,7);
/*!40000 ALTER TABLE `TRIM_EXTERIOR_COLOR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRIM_FUNCTION`
--

DROP TABLE IF EXISTS `TRIM_FUNCTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TRIM_FUNCTION` (
  `trim_function_id` bigint NOT NULL AUTO_INCREMENT,
  `is_default` varchar(5) DEFAULT NULL,
  `function_id` bigint DEFAULT NULL,
  `trim_id` bigint DEFAULT NULL,
  PRIMARY KEY (`trim_function_id`),
  KEY `FK_FUNCTION_TO_TRIM_FUNCTION_1` (`function_id`),
  KEY `FK_TRIM_TO_TRIM_FUNCTION_1` (`trim_id`),
  CONSTRAINT `FK_FUNCTION_TO_TRIM_FUNCTION_1` FOREIGN KEY (`function_id`) REFERENCES `FUNCTIONS` (`function_id`),
  CONSTRAINT `FK_TRIM_TO_TRIM_FUNCTION_1` FOREIGN KEY (`trim_id`) REFERENCES `TRIM` (`trim_id`)
) ENGINE=InnoDB AUTO_INCREMENT=478 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRIM_FUNCTION`
--

LOCK TABLES `TRIM_FUNCTION` WRITE;
/*!40000 ALTER TABLE `TRIM_FUNCTION` DISABLE KEYS */;
INSERT INTO `TRIM_FUNCTION` VALUES (1,'TRUE',1,1),(2,'TRUE',2,1),(3,'TRUE',3,1),(4,'TRUE',4,1),(5,'TRUE',5,1),(6,'TRUE',6,1),(7,'TRUE',7,1),(8,'TRUE',8,1),(9,'TRUE',9,1),(10,'TRUE',10,1),(11,'TRUE',11,1),(12,'TRUE',12,1),(13,'TRUE',13,1),(14,'TRUE',14,1),(15,'TRUE',15,1),(16,'TRUE',16,1),(17,'FALSE',17,1),(18,'FALSE',18,1),(19,'FALSE',19,1),(20,'FALSE',20,1),(21,'FALSE',24,1),(22,'FALSE',25,1),(23,'TRUE',27,1),(24,'TRUE',28,1),(25,'TRUE',29,1),(26,'TRUE',30,1),(27,'TRUE',31,1),(28,'TRUE',32,1),(29,'TRUE',33,1),(30,'TRUE',34,1),(31,'TRUE',35,1),(32,'TRUE',36,1),(33,'TRUE',37,1),(34,'TRUE',38,1),(35,'TRUE',39,1),(36,'TRUE',40,1),(37,'TRUE',41,1),(38,'TRUE',42,1),(39,'TRUE',43,1),(40,'TRUE',44,1),(41,'TRUE',45,1),(42,'FALSE',46,1),(43,'TRUE',49,1),(44,'TRUE',50,1),(45,'TRUE',64,1),(46,'TRUE',65,1),(47,'TRUE',66,1),(48,'TRUE',67,1),(49,'FALSE',74,1),(50,'TRUE',75,1),(51,'TRUE',76,1),(52,'TRUE',77,1),(53,'TRUE',78,1),(54,'TRUE',79,1),(55,'TRUE',80,1),(56,'TRUE',81,1),(57,'TRUE',82,1),(58,'TRUE',83,1),(59,'TRUE',84,1),(60,'TRUE',85,1),(61,'TRUE',86,1),(62,'TRUE',87,1),(63,'TRUE',88,1),(64,'TRUE',89,1),(65,'TRUE',90,1),(66,'TRUE',91,1),(67,'TRUE',92,1),(68,'FALSE',93,1),(69,'FALSE',95,1),(70,'FALSE',96,1),(71,'TRUE',104,1),(72,'TRUE',105,1),(73,'TRUE',106,1),(74,'TRUE',107,1),(75,'TRUE',108,1),(76,'FALSE',118,1),(77,'FALSE',119,1),(78,'FALSE',120,1),(79,'TRUE',129,1),(80,'TRUE',130,1),(81,'TRUE',132,1),(82,'TRUE',133,1),(83,'FALSE',134,1),(84,'FALSE',135,1),(85,'FALSE',136,1),(86,'FALSE',137,1),(87,'FALSE',138,1),(88,'FALSE',139,1),(89,'FALSE',140,1),(90,'TRUE',141,1),(91,'TRUE',142,1),(92,'TRUE',143,1),(93,'TRUE',144,1),(94,'FALSE',145,1),(95,'TRUE',147,1),(96,'TRUE',148,1),(97,'TRUE',1,2),(98,'TRUE',2,2),(99,'TRUE',3,2),(100,'TRUE',4,2),(101,'TRUE',5,2),(102,'TRUE',6,2),(103,'TRUE',7,2),(104,'TRUE',8,2),(105,'TRUE',9,2),(106,'TRUE',10,2),(107,'TRUE',11,2),(108,'TRUE',12,2),(109,'TRUE',13,2),(110,'TRUE',14,2),(111,'TRUE',15,2),(112,'TRUE',16,2),(113,'TRUE',17,2),(114,'TRUE',18,2),(115,'TRUE',19,2),(116,'TRUE',20,2),(117,'FALSE',21,2),(118,'FALSE',22,2),(119,'FALSE',23,2),(120,'FALSE',24,2),(121,'FALSE',25,2),(122,'FALSE',26,2),(123,'TRUE',27,2),(124,'TRUE',28,2),(125,'TRUE',29,2),(126,'TRUE',30,2),(127,'TRUE',31,2),(128,'TRUE',32,2),(129,'TRUE',33,2),(130,'TRUE',34,2),(131,'TRUE',35,2),(132,'TRUE',36,2),(133,'TRUE',37,2),(134,'TRUE',38,2),(135,'TRUE',39,2),(136,'TRUE',40,2),(137,'TRUE',41,2),(138,'TRUE',42,2),(139,'TRUE',43,2),(140,'TRUE',44,2),(141,'TRUE',45,2),(142,'TRUE',46,2),(143,'TRUE',49,2),(144,'TRUE',50,2),(145,'TRUE',51,2),(146,'TRUE',52,2),(147,'TRUE',53,2),(148,'TRUE',54,2),(149,'FALSE',57,2),(150,'FALSE',58,2),(151,'TRUE',64,2),(152,'TRUE',65,2),(153,'TRUE',66,2),(154,'TRUE',67,2),(155,'TRUE',68,2),(156,'FALSE',71,2),(157,'FALSE',73,2),(158,'FALSE',74,2),(159,'TRUE',76,2),(160,'TRUE',77,2),(161,'TRUE',78,2),(162,'TRUE',79,2),(163,'TRUE',80,2),(164,'TRUE',81,2),(165,'TRUE',82,2),(166,'TRUE',83,2),(167,'TRUE',84,2),(168,'TRUE',85,2),(169,'TRUE',86,2),(170,'TRUE',87,2),(171,'TRUE',88,2),(172,'TRUE',89,2),(173,'TRUE',90,2),(174,'TRUE',91,2),(175,'TRUE',92,2),(176,'TRUE',93,2),(177,'TRUE',94,2),(178,'TRUE',95,2),(179,'TRUE',96,2),(180,'TRUE',97,2),(181,'FALSE',101,2),(182,'TRUE',104,2),(183,'TRUE',105,2),(184,'TRUE',106,2),(185,'TRUE',107,2),(186,'TRUE',108,2),(187,'TRUE',109,2),(188,'TRUE',110,2),(189,'TRUE',111,2),(190,'TRUE',112,2),(191,'TRUE',113,2),(192,'TRUE',114,2),(193,'TRUE',115,2),(194,'TRUE',116,2),(195,'TRUE',117,2),(196,'FALSE',118,2),(197,'FALSE',119,2),(198,'FALSE',120,2),(199,'FALSE',121,2),(200,'FALSE',122,2),(201,'FALSE',123,2),(202,'TRUE',129,2),(203,'TRUE',130,2),(204,'FALSE',131,2),(205,'TRUE',132,2),(206,'FALSE',134,2),(207,'FALSE',135,2),(208,'FALSE',138,2),(209,'FALSE',139,2),(210,'FALSE',140,2),(211,'TRUE',141,2),(212,'TRUE',144,2),(213,'FALSE',145,2),(214,'TRUE',148,2),(215,'TRUE',1,3),(216,'TRUE',2,3),(217,'TRUE',3,3),(218,'TRUE',4,3),(219,'TRUE',5,3),(220,'TRUE',6,3),(221,'TRUE',7,3),(222,'TRUE',8,3),(223,'TRUE',9,3),(224,'TRUE',10,3),(225,'TRUE',11,3),(226,'TRUE',12,3),(227,'TRUE',13,3),(228,'TRUE',14,3),(229,'TRUE',15,3),(230,'TRUE',16,3),(231,'TRUE',17,3),(232,'TRUE',18,3),(233,'TRUE',19,3),(234,'TRUE',20,3),(235,'FALSE',21,3),(236,'FALSE',22,3),(237,'FALSE',23,3),(238,'FALSE',24,3),(239,'FALSE',25,3),(240,'FALSE',26,3),(241,'TRUE',27,3),(242,'TRUE',28,3),(243,'TRUE',29,3),(244,'TRUE',30,3),(245,'TRUE',31,3),(246,'TRUE',32,3),(247,'TRUE',33,3),(248,'TRUE',34,3),(249,'TRUE',35,3),(250,'TRUE',36,3),(251,'TRUE',37,3),(252,'TRUE',38,3),(253,'TRUE',39,3),(254,'TRUE',40,3),(255,'TRUE',41,3),(256,'TRUE',42,3),(257,'TRUE',43,3),(258,'TRUE',44,3),(259,'TRUE',45,3),(260,'TRUE',46,3),(261,'TRUE',47,3),(262,'TRUE',49,3),(263,'TRUE',50,3),(264,'TRUE',51,3),(265,'TRUE',52,3),(266,'TRUE',53,3),(267,'TRUE',54,3),(268,'TRUE',55,3),(269,'FALSE',57,3),(270,'FALSE',58,3),(271,'TRUE',64,3),(272,'TRUE',65,3),(273,'TRUE',66,3),(274,'TRUE',67,3),(275,'TRUE',68,3),(276,'TRUE',69,3),(277,'TRUE',70,3),(278,'TRUE',71,3),(279,'TRUE',72,3),(280,'FALSE',73,3),(281,'TRUE',74,3),(282,'TRUE',75,3),(283,'TRUE',76,3),(284,'TRUE',77,3),(285,'TRUE',78,3),(286,'TRUE',79,3),(287,'TRUE',80,3),(288,'TRUE',81,3),(289,'TRUE',82,3),(290,'TRUE',83,3),(291,'TRUE',84,3),(292,'TRUE',85,3),(293,'TRUE',86,3),(294,'TRUE',87,3),(295,'TRUE',88,3),(296,'TRUE',89,3),(297,'TRUE',90,3),(298,'TRUE',91,3),(299,'TRUE',92,3),(300,'TRUE',93,3),(301,'TRUE',94,3),(302,'TRUE',95,3),(303,'TRUE',96,3),(304,'TRUE',97,3),(305,'TRUE',98,3),(306,'TRUE',99,3),(307,'TRUE',100,3),(308,'FALSE',101,3),(309,'TRUE',104,3),(310,'TRUE',105,3),(311,'TRUE',106,3),(312,'TRUE',107,3),(313,'TRUE',108,3),(314,'FALSE',109,3),(315,'FALSE',110,3),(316,'FALSE',111,3),(317,'FALSE',112,3),(318,'FALSE',113,3),(319,'FALSE',114,3),(320,'FALSE',115,3),(321,'FALSE',116,3),(322,'FALSE',117,3),(323,'FALSE',118,3),(324,'FALSE',119,3),(325,'FALSE',120,3),(326,'FALSE',121,3),(327,'FALSE',122,3),(328,'FALSE',123,3),(329,'TRUE',129,3),(330,'TRUE',130,3),(331,'TRUE',131,3),(332,'TRUE',132,3),(333,'TRUE',133,3),(334,'FALSE',134,3),(335,'FALSE',135,3),(336,'FALSE',138,3),(337,'FALSE',139,3),(338,'FALSE',140,3),(339,'TRUE',141,3),(340,'TRUE',144,3),(341,'FALSE',145,3),(342,'FALSE',146,3),(343,'TRUE',1,4),(344,'TRUE',2,4),(345,'TRUE',3,4),(346,'TRUE',4,4),(347,'TRUE',5,4),(348,'TRUE',6,4),(349,'TRUE',7,4),(350,'TRUE',8,4),(351,'TRUE',9,4),(352,'TRUE',10,4),(353,'TRUE',11,4),(354,'TRUE',12,4),(355,'TRUE',13,4),(356,'TRUE',14,4),(357,'TRUE',15,4),(358,'TRUE',16,4),(359,'TRUE',17,4),(360,'TRUE',18,4),(361,'TRUE',19,4),(362,'TRUE',20,4),(363,'TRUE',21,4),(364,'TRUE',22,4),(365,'TRUE',23,4),(366,'TRUE',24,4),(367,'TRUE',25,4),(368,'TRUE',26,4),(369,'TRUE',27,4),(370,'TRUE',28,4),(371,'TRUE',29,4),(372,'TRUE',30,4),(373,'TRUE',31,4),(374,'TRUE',32,4),(375,'TRUE',33,4),(376,'TRUE',34,4),(377,'TRUE',35,4),(378,'TRUE',36,4),(379,'TRUE',37,4),(380,'TRUE',38,4),(381,'TRUE',39,4),(382,'TRUE',40,4),(383,'TRUE',41,4),(384,'TRUE',42,4),(385,'TRUE',43,4),(386,'TRUE',44,4),(387,'TRUE',45,4),(388,'TRUE',46,4),(389,'TRUE',47,4),(390,'TRUE',48,4),(391,'TRUE',49,4),(392,'TRUE',50,4),(393,'TRUE',51,4),(394,'TRUE',52,4),(395,'TRUE',53,4),(396,'TRUE',54,4),(397,'TRUE',55,4),(398,'TRUE',56,4),(399,'TRUE',57,4),(400,'TRUE',58,4),(401,'TRUE',59,4),(402,'TRUE',60,4),(403,'TRUE',61,4),(404,'TRUE',62,4),(405,'TRUE',63,4),(406,'TRUE',64,4),(407,'TRUE',65,4),(408,'TRUE',66,4),(409,'TRUE',67,4),(410,'TRUE',68,4),(411,'TRUE',69,4),(412,'TRUE',70,4),(413,'TRUE',71,4),(414,'TRUE',72,4),(415,'TRUE',73,4),(416,'TRUE',74,4),(417,'TRUE',75,4),(418,'TRUE',76,4),(419,'TRUE',77,4),(420,'TRUE',78,4),(421,'TRUE',79,4),(422,'TRUE',80,4),(423,'TRUE',81,4),(424,'TRUE',82,4),(425,'TRUE',83,4),(426,'TRUE',84,4),(427,'TRUE',85,4),(428,'TRUE',86,4),(429,'TRUE',87,4),(430,'TRUE',88,4),(431,'TRUE',89,4),(432,'TRUE',90,4),(433,'TRUE',91,4),(434,'TRUE',92,4),(435,'TRUE',93,4),(436,'TRUE',94,4),(437,'TRUE',95,4),(438,'TRUE',96,4),(439,'TRUE',97,4),(440,'TRUE',98,4),(441,'TRUE',99,4),(442,'TRUE',100,4),(443,'TRUE',101,4),(444,'TRUE',102,4),(445,'TRUE',103,4),(446,'TRUE',104,4),(447,'TRUE',105,4),(448,'TRUE',106,4),(449,'TRUE',107,4),(450,'TRUE',108,4),(451,'TRUE',109,4),(452,'TRUE',110,4),(453,'TRUE',111,4),(454,'TRUE',112,4),(455,'TRUE',113,4),(456,'TRUE',114,4),(457,'TRUE',115,4),(458,'TRUE',116,4),(459,'TRUE',117,4),(460,'TRUE',118,4),(461,'TRUE',119,4),(462,'TRUE',120,4),(463,'TRUE',121,4),(464,'TRUE',122,4),(465,'TRUE',123,4),(466,'TRUE',125,4),(467,'TRUE',126,4),(468,'TRUE',127,4),(469,'TRUE',128,4),(470,'TRUE',129,4),(471,'FALSE',135,4),(472,'FALSE',136,4),(473,'FALSE',139,4),(474,'FALSE',140,4),(475,'FALSE',141,4),(476,'FALSE',146,4),(477,'FALSE',147,4);
/*!40000 ALTER TABLE `TRIM_FUNCTION` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-11 15:50:32
