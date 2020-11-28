-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: SOLAR
-- ------------------------------------------------------
-- Server version	10.3.22-MariaDB-1ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `MEDICION`
--

DROP TABLE IF EXISTS `MEDICION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MEDICION` (
  `FECHA` date NOT NULL,
  `DESCARGA` float DEFAULT NULL,
  `CARGA` float DEFAULT NULL,
  `USO_PROPIO` float DEFAULT NULL,
  `NUBOSIDAD` float DEFAULT NULL,
  `TEMPERATURA` float DEFAULT NULL,
  `PV` float DEFAULT NULL,
  `HORA` int(11) DEFAULT NULL,
  `P_INVERSOR` int(11) DEFAULT NULL,
  `P_GRID` int(11) DEFAULT NULL,
  `PORCENTAJE_CARGA` int(11) DEFAULT NULL,
  `PV_VOLTAGE` int(11) DEFAULT NULL,
  UNIQUE KEY `unico` (`FECHA`,`HORA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MEDICION`
--

LOCK TABLES `MEDICION` WRITE;
/*!40000 ALTER TABLE `MEDICION` DISABLE KEYS */;
INSERT INTO `MEDICION` VALUES ('2020-08-03',322.5,901.5,322.5,NULL,NULL,22.4,12,236,0,7,82),('2020-08-03',0.2,0.2,0.2,NULL,NULL,0.3,13,92,0,3,83),('2020-08-03',0.1,0.1,0.1,NULL,NULL,0.1,14,91,0,3,83),('2020-08-03',0.1,0.1,0.1,NULL,NULL,0.3,15,91,0,3,82),('2020-08-03',0.2,0.2,0.2,NULL,NULL,0.1,16,0,373,12,65),('2020-08-03',0,0.4,0,NULL,NULL,0,17,0,365,12,31),('2020-08-04',0,0.3,0,NULL,NULL,0,0,0,225,7,31),('2020-08-04',0.5,1,0.5,NULL,NULL,0.1,9,0,146,4,0),('2020-08-04',0.7,1.8,0.7,NULL,NULL,0.3,10,390,0,13,75),('2020-08-04',0.4,0.4,0.4,NULL,NULL,0.4,11,378,0,12,76),('2020-08-04',0.3,0.3,0.3,NULL,NULL,0.5,12,304,0,10,79),('2020-08-04',0.3,0.3,0.3,NULL,NULL,0.3,13,120,0,3,82),('2020-08-04',0.2,0.2,0.2,NULL,NULL,0.2,14,120,0,3,82),('2020-08-04',0.1,0.1,0.1,NULL,NULL,0.3,15,119,0,3,81),('2020-08-04',0.2,0.2,0.2,NULL,NULL,0.1,16,182,0,5,30),('2020-08-04',0,0.3,0,NULL,NULL,0.1,17,0,306,10,31),('2020-08-04',0,0.4,0,NULL,NULL,0,18,0,327,10,31),('2020-08-05',0,0.1,0,NULL,NULL,0,0,0,286,9,31),('2020-08-05',0.4,0.8,0.4,NULL,NULL,0,8,112,0,3,0),('2020-08-05',0.7,1.6,0.7,NULL,NULL,0.2,9,418,0,13,74),('2020-08-05',0.3,0.3,0.3,NULL,NULL,0.4,10,314,0,10,75),('2020-08-05',0.4,0.4,0.4,NULL,NULL,0.5,11,451,0,15,74),('2020-08-05',0.2,0.2,0.2,NULL,NULL,0.3,12,93,0,3,80),('2020-08-05',0.1,0.2,0.1,NULL,NULL,0.2,13,243,0,8,73),('2020-08-05',0.1,0.1,0.1,NULL,NULL,0.2,14,88,0,2,78),('2020-08-05',0.1,0.1,0.1,NULL,NULL,0.2,15,257,0,8,72),('2020-08-05',0.1,0.4,0.1,NULL,NULL,0.1,16,0,399,13,31),('2020-08-05',0,0.4,0,NULL,NULL,0,17,0,511,17,31),('2020-08-06',0,0.2,0,NULL,NULL,0,0,0,133,4,31),('2020-08-06',0.4,0.8,0.4,NULL,NULL,0,8,0,117,3,0),('2020-08-06',0.5,1.5,0.5,NULL,NULL,0.1,9,359,0,12,74),('2020-08-06',0.2,0.5,0.2,NULL,NULL,0.3,10,360,0,11,75),('2020-08-06',0.3,0.3,0.3,NULL,NULL,0.3,11,312,0,10,73),('2020-08-06',0.1,0.3,0.1,NULL,NULL,0.3,12,94,0,3,82),('2020-08-06',0.1,0.1,0.1,NULL,NULL,0.2,13,96,0,3,81),('2020-08-06',0.2,0.2,0.2,NULL,NULL,0.2,14,92,0,3,71),('2020-08-06',0.1,0.1,0.1,NULL,NULL,0.1,15,95,0,3,28),('2020-08-06',0,0.4,0,NULL,NULL,0,16,0,318,10,31),('2020-08-06',0,0.3,0,NULL,NULL,0,17,0,348,11,31),('2020-08-07',0,0.1,0,NULL,NULL,0.1,0,0,249,8,22),('2020-08-07',0.4,0.8,0.4,NULL,NULL,0,9,133,0,4,0),('2020-08-07',0.5,1.8,0.5,NULL,NULL,0,10,0,434,14,31),('2020-08-07',0,0.4,0,NULL,NULL,0,11,0,378,12,31),('2020-08-07',0,0.4,0,NULL,NULL,0,12,0,341,11,31),('2020-08-07',0,0.3,0,NULL,NULL,0.1,13,0,133,4,31),('2020-08-07',0,0.2,0,NULL,NULL,0,14,0,282,9,31),('2020-08-07',0,0.1,0,NULL,NULL,0.1,15,0,134,4,31),('2020-08-07',0,0.2,0,NULL,NULL,0,16,0,788,26,31),('2020-08-07',0,0.4,0,NULL,NULL,0,17,0,292,9,31),('2020-08-07',0,0.9,0,NULL,NULL,0,18,0,568,19,31),('2020-08-08',0,0.1,0,NULL,NULL,0,0,0,271,8,31),('2020-08-08',0.3,0.8,0.3,NULL,NULL,0,8,0,119,4,0),('2020-08-08',0.4,1.6,0.4,NULL,NULL,0.1,9,0,877,28,31),('2020-08-08',0,0.4,0,NULL,NULL,0,10,0,413,13,31),('2020-08-08',0,0.4,0,NULL,NULL,0,11,0,334,11,31),('2020-08-08',0.1,0.3,0.1,NULL,NULL,0.1,12,0,506,16,84),('2020-08-08',0.2,0.4,0.2,NULL,NULL,0.3,13,353,0,11,76),('2020-08-08',0.4,0.4,0.4,NULL,NULL,0.4,14,0,1359,45,85),('2020-08-08',0,1.4,0,NULL,NULL,0.1,15,0,1384,46,84),('2020-08-08',0.1,1,0.1,NULL,NULL,0.1,16,365,0,12,74),('2020-08-08',0,0.3,0,NULL,NULL,0.1,17,0,297,9,31),('2020-08-08',0,0.4,0,NULL,NULL,0,18,0,379,12,31),('2020-08-08',0,0.5,0,NULL,NULL,0,19,0,423,14,0),('2020-08-08',0.1,0.4,0.1,NULL,NULL,0,20,0,434,14,0),('2020-08-08',0,0.5,0,NULL,NULL,0,21,0,424,13,0),('2020-08-08',0,0.5,0,NULL,NULL,0,22,0,471,15,0),('2020-08-08',0,0.5,0,NULL,NULL,0,23,0,484,16,0),('2020-08-09',0,0.4,0,NULL,NULL,0,0,0,264,8,0),('2020-08-09',0,0.3,0,NULL,NULL,0,1,0,477,15,0),('2020-08-09',0,0.3,0,NULL,NULL,0,2,0,270,8,0),('2020-08-09',0,0.2,0,NULL,NULL,0,3,0,219,7,0),('2020-08-09',0,0.3,0,NULL,NULL,0,4,0,264,8,0),('2020-08-09',0.2,0.3,0.2,NULL,NULL,0,5,246,0,8,0),('2020-08-09',0,0.3,0,NULL,NULL,0,6,0,406,13,0),('2020-08-09',0,0.2,0,NULL,NULL,0,7,0,219,7,0),('2020-08-09',0,0.2,0,NULL,NULL,0,8,0,187,6,31),('2020-08-09',0,0.3,0,NULL,NULL,0,15,0,193,6,31),('2020-08-10',0,0.8,0,NULL,NULL,0.3,9,0,119,4,83),('2020-08-10',0.3,3.1,0.3,NULL,NULL,0.4,10,328,0,11,81),('2020-08-10',0.4,0.4,0.4,NULL,NULL,0.4,11,337,0,11,82),('2020-08-10',0.3,0.4,0.3,NULL,NULL,0.4,12,328,0,10,82),('2020-08-10',0.3,0.2,0.3,NULL,NULL,0.3,13,121,0,4,84),('2020-08-10',0.1,0.1,0.1,NULL,NULL,0.1,14,119,0,3,84),('2020-08-10',0.1,0.2,0.1,NULL,NULL,0.2,15,291,0,9,82),('2020-08-10',0.2,0.2,0.2,NULL,NULL,0.2,16,278,0,9,29),('2020-08-10',0.3,0.3,0.3,NULL,NULL,0,17,0,358,12,30),('2020-08-10',0,0.4,0,NULL,NULL,0,18,0,257,8,31),('2020-08-11',0,0.1,0,NULL,NULL,0,0,0,116,4,31),('2020-08-11',0.5,0.7,0.5,NULL,NULL,0,9,116,0,3,0),('2020-08-11',0.7,1.5,0.7,NULL,NULL,0.5,10,290,0,9,82),('2020-08-11',0.3,0.4,0.3,NULL,NULL,0.4,11,378,0,12,81),('2020-08-11',0.4,0.4,0.4,NULL,NULL,0.5,12,380,0,12,81),('2020-08-11',0.2,0.2,0.2,NULL,NULL,0.3,13,277,0,9,82),('2020-08-11',0.2,0.1,0.2,NULL,NULL,0.2,14,121,0,4,84),('2020-08-11',0.1,0.2,0.1,NULL,NULL,0.2,15,117,0,3,84),('2020-08-11',0.2,0.2,0.2,NULL,NULL,0.2,16,243,0,8,30),('2020-08-11',0,0.2,0,NULL,NULL,0,17,0,299,9,31),('2020-08-11',0,0.4,0,NULL,NULL,0,18,0,322,10,31),('2020-08-12',0,0.1,0,NULL,NULL,0,0,0,114,3,31),('2020-08-12',0.5,0.8,0.5,NULL,NULL,0,9,116,0,3,0),('2020-08-12',0.6,1.4,0.6,NULL,NULL,0.5,10,271,0,8,79),('2020-08-12',0.3,0.3,0.3,NULL,NULL,0.4,11,279,0,9,82),('2020-08-12',0.4,0.4,0.4,NULL,NULL,0.4,12,976,0,21,70),('2020-08-12',0.2,0.2,0.2,NULL,NULL,0.3,13,131,0,4,84),('2020-08-12',0.2,0.2,0.2,NULL,NULL,0.2,14,128,0,4,84),('2020-08-12',0.1,0.1,0.1,NULL,NULL,0.2,15,130,0,4,84),('2020-08-12',0.1,0.2,0.1,NULL,NULL,0.2,16,0,574,19,31),('2020-08-12',0,0.5,0,NULL,NULL,0,17,0,465,15,31),('2020-08-13',0,0.5,0,NULL,NULL,0,0,0,396,13,31),('2020-08-13',0.4,0.7,0.4,NULL,NULL,0,8,115,0,3,0),('2020-08-13',0.7,1.5,0.7,NULL,NULL,0.3,9,389,0,12,78),('2020-08-13',0.2,0.4,0.2,NULL,NULL,0.4,10,312,0,10,80),('2020-08-13',0.4,0.3,0.4,NULL,NULL,0.4,11,307,0,10,80),('2020-08-13',0.2,0.3,0.2,NULL,NULL,0.3,12,91,0,2,84),('2020-08-13',0.1,0.1,0.1,NULL,NULL,0.1,13,90,0,3,84),('2020-08-13',0.1,0.1,0.1,NULL,NULL,0.2,14,91,0,2,83),('2020-08-13',0.1,0.1,0.1,NULL,NULL,0.2,15,87,0,2,71),('2020-08-13',0.1,0.3,0.1,NULL,NULL,0,16,0,337,11,31),('2020-08-13',0,0.4,0,NULL,NULL,0,17,0,298,9,31),('2020-08-14',0,0.1,0,NULL,NULL,0,0,0,119,4,31),('2020-08-14',0.3,0.7,0.3,NULL,NULL,0,9,0,120,3,0),('2020-08-14',0.6,1.7,0.6,NULL,NULL,0.3,10,249,0,8,82),('2020-08-14',0.2,0.3,0.2,NULL,NULL,0.3,11,0,345,11,86),('2020-08-14',0.3,0.4,0.3,NULL,NULL,0.4,12,321,0,10,79),('2020-08-14',0.2,0.2,0.2,NULL,NULL,0.3,13,91,0,2,83),('2020-08-14',0.2,0.1,0.2,NULL,NULL,0.2,14,91,0,3,83),('2020-08-14',0.1,0.1,0.1,NULL,NULL,0.1,15,91,0,2,84),('2020-08-14',0.1,0.2,0.1,NULL,NULL,0.2,16,0,235,7,31),('2020-08-14',0,0.3,0,NULL,NULL,0,17,0,283,9,31),('2020-08-14',0,0.3,0,NULL,NULL,0,18,0,300,9,31),('2020-08-15',0,0.1,0,NULL,NULL,0,0,0,117,3,31),('2020-08-15',0.4,0.8,0.4,NULL,NULL,0,9,119,0,3,0),('2020-08-15',0.7,1.4,0.7,NULL,NULL,0.5,10,306,0,10,82),('2020-08-15',0.3,0.3,0.3,NULL,NULL,0.4,11,318,0,10,83),('2020-08-15',0.3,0.4,0.3,NULL,NULL,0.4,12,307,0,10,83),('2020-08-15',0.3,0.2,0.3,NULL,NULL,0.3,18,81,0,2,86),('2020-08-18',0.4,0.6,0.4,4,12.5,0.5,9,0,118,3,0),('2020-08-18',3.1,7.5,3.1,4,13.3,2.7,10,303,0,10,79),('2020-08-18',0.3,0.3,0.3,5,14.1,0.4,11,317,0,10,80),('2020-08-18',0.4,0.4,0.4,5,14.9,0.4,12,311,0,10,80),('2020-08-18',0.2,0.2,0.2,6,15.2,0.2,13,120,0,4,82),('2020-08-18',0.2,0.2,0.2,7,15.6,0.2,14,281,0,9,81),('2020-08-18',0.1,0.1,0.1,8,15.9,0.2,15,121,0,3,82),('2020-08-18',0.1,0.1,0.1,7,15.4,0.2,16,0,317,10,74),('2020-08-18',0,0.4,0,7,14.8,0,17,0,332,10,31),('2020-08-18',0,0.4,0,6,14.3,0,18,0,324,10,31),('2020-08-19',0,0.1,0,64,10.5,0,0,0,284,9,31),('2020-08-19',0.2,0.7,0.2,46,5.4,0,9,112,0,3,0),('2020-08-19',0.7,1.7,0.7,35,6.3,0.5,10,420,0,14,79),('2020-08-19',0.3,0.5,0.3,23,7.3,0.3,11,352,0,11,82),('2020-08-19',0.2,0.4,0.2,12,8.2,0.4,12,326,0,10,84),('2020-08-19',0.2,0.2,0.2,30,8.7,0.2,13,0,0,0,86),('2020-08-19',0,0,0,72,9.6,0,16,0,0,0,85),('2020-08-19',0.2,0.8,0.2,77,9.4,0.3,17,0,344,11,31),('2020-08-19',0,0.4,0,83,9.2,0.1,18,0,438,14,31),('2020-08-20',0,0.2,0,0,5,0,0,0,297,9,31),('2020-08-20',0.3,0.7,0.3,0,3.9,0,8,0,121,4,0),('2020-08-20',0.5,1.5,0.5,0,4.3,0.2,9,0,392,13,88),('2020-08-20',0.2,0.6,0.2,0,5.7,0.3,10,395,0,13,81),('2020-08-20',0.3,0.4,0.3,0,7,0.3,11,0,355,11,86);
/*!40000 ALTER TABLE `MEDICION` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-28  1:59:21