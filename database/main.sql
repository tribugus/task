/*
Navicat SQLite Data Transfer

Source Server         : task
Source Server Version : 30714
Source Host           : :0

Target Server Type    : SQLite
Target Server Version : 30714
File Encoding         : 65001

Date: 2024-12-16 13:32:13
*/

PRAGMA foreign_keys = OFF;

-- ----------------------------
-- Table structure for cache
-- ----------------------------
DROP TABLE IF EXISTS "main"."cache";
CREATE TABLE "cache" ("key" varchar not null, "value" text not null, "expiration" integer not null, primary key ("key"));

-- ----------------------------
-- Records of cache
-- ----------------------------

-- ----------------------------
-- Table structure for cache_locks
-- ----------------------------
DROP TABLE IF EXISTS "main"."cache_locks";
CREATE TABLE "cache_locks" ("key" varchar not null, "owner" varchar not null, "expiration" integer not null, primary key ("key"));

-- ----------------------------
-- Records of cache_locks
-- ----------------------------

-- ----------------------------
-- Table structure for comentario
-- ----------------------------
DROP TABLE IF EXISTS "main"."comentario";
CREATE TABLE "comentario" ("id" integer primary key autoincrement not null, "tarea_id" integer not null, "usuario_id" integer not null, "contenido" text not null, "fecha_creacion" datetime not null default CURRENT_TIMESTAMP, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of comentario
-- ----------------------------

-- ----------------------------
-- Table structure for etiqueta
-- ----------------------------
DROP TABLE IF EXISTS "main"."etiqueta";
CREATE TABLE "etiqueta" ("id" integer primary key autoincrement not null, "nombre" varchar not null, "usuario_id" integer not null, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of etiqueta
-- ----------------------------

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS "main"."failed_jobs";
CREATE TABLE "failed_jobs" ("id" integer primary key autoincrement not null, "uuid" varchar not null, "connection" text not null, "queue" text not null, "payload" text not null, "exception" text not null, "failed_at" datetime not null default CURRENT_TIMESTAMP);

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for lista
-- ----------------------------
DROP TABLE IF EXISTS "main"."lista";
CREATE TABLE "lista" ("id" integer primary key autoincrement not null, "usuario_id" integer not null, "nombre" varchar not null, "descripcion" text, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of lista
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS "main"."migrations";
CREATE TABLE "migrations" ("id" integer primary key autoincrement not null, "migration" varchar not null, "batch" integer not null);

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO "main"."migrations" VALUES (1, '0001_01_01_000000_create_usuario_table', 1);
INSERT INTO "main"."migrations" VALUES (2, '0001_01_01_000001_create_cache_table', 1);
INSERT INTO "main"."migrations" VALUES (3, '2014_10_12_000000_create_users_table', 1);
INSERT INTO "main"."migrations" VALUES (4, '2014_10_12_100000_create_password_reset_tokens_table', 1);
INSERT INTO "main"."migrations" VALUES (5, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO "main"."migrations" VALUES (6, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO "main"."migrations" VALUES (7, '2024_11_13_123850_create_sessions_table', 1);
INSERT INTO "main"."migrations" VALUES (8, '2024_12_16_171823_create_tarea_table', 1);
INSERT INTO "main"."migrations" VALUES (9, '2024_12_16_172723_create_lista_table', 1);
INSERT INTO "main"."migrations" VALUES (10, '2024_12_16_173219_create_tareas_listas_table', 1);
INSERT INTO "main"."migrations" VALUES (11, '2024_12_16_173813_create_etiqueta_table', 1);
INSERT INTO "main"."migrations" VALUES (12, '2024_12_16_174206_create_tarea_etiqueta_table', 1);
INSERT INTO "main"."migrations" VALUES (13, '2024_12_16_174357_create_comentario_table', 1);
INSERT INTO "main"."migrations" VALUES (14, '2024_12_16_174547_create_recordatorio_table', 1);

-- ----------------------------
-- Table structure for password_reset_tokens
-- ----------------------------
DROP TABLE IF EXISTS "main"."password_reset_tokens";
CREATE TABLE "password_reset_tokens" ("email" varchar not null, "token" varchar not null, "created_at" datetime, primary key ("email"));

-- ----------------------------
-- Records of password_reset_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS "main"."personal_access_tokens";
CREATE TABLE "personal_access_tokens" ("id" integer primary key autoincrement not null, "tokenable_type" varchar not null, "tokenable_id" integer not null, "name" varchar not null, "token" varchar not null, "abilities" text, "last_used_at" datetime, "expires_at" datetime, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for recordatorio
-- ----------------------------
DROP TABLE IF EXISTS "main"."recordatorio";
CREATE TABLE "recordatorio" ("id" integer primary key autoincrement not null, "tarea_id" integer not null, "fecha_recordatorio" datetime not null, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of recordatorio
-- ----------------------------

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS "main"."sessions";
CREATE TABLE "sessions" ("id" varchar not null, "user_id" integer, "ip_address" varchar, "user_agent" text, "payload" text not null, "last_activity" integer not null);

-- ----------------------------
-- Records of sessions
-- ----------------------------

-- ----------------------------
-- Table structure for sqlite_sequence
-- ----------------------------
DROP TABLE IF EXISTS "main"."sqlite_sequence";
CREATE TABLE sqlite_sequence(name,seq);

-- ----------------------------
-- Records of sqlite_sequence
-- ----------------------------
INSERT INTO "main"."sqlite_sequence" VALUES ('migrations', 14);

-- ----------------------------
-- Table structure for tarea
-- ----------------------------
DROP TABLE IF EXISTS "main"."tarea";
CREATE TABLE "tarea" ("id" integer primary key autoincrement not null, "usuario_id" integer not null, "titulo" varchar not null, "descripcion" text, "fecha_inicio" datetime, "fecha_vencimiento" datetime, "prioridad" varchar not null default 'Media', "estado" varchar not null default 'Pendiente', "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of tarea
-- ----------------------------

-- ----------------------------
-- Table structure for tareas_listas
-- ----------------------------
DROP TABLE IF EXISTS "main"."tareas_listas";
CREATE TABLE "tareas_listas" ("id" integer primary key autoincrement not null, "tarea_id" integer not null, "lista_id" integer not null, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of tareas_listas
-- ----------------------------

-- ----------------------------
-- Table structure for tarea_etiqueta
-- ----------------------------
DROP TABLE IF EXISTS "main"."tarea_etiqueta";
CREATE TABLE "tarea_etiqueta" ("id" integer primary key autoincrement not null, "tarea_id" integer not null, "etiqueta_id" integer not null, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of tarea_etiqueta
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "main"."users";
CREATE TABLE "users" ("id" integer primary key autoincrement not null, "name" varchar not null, "email" varchar not null, "email_verified_at" datetime, "password" varchar not null, "remember_token" varchar, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of users
-- ----------------------------

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS "main"."usuario";
CREATE TABLE "usuario" ("id" integer primary key autoincrement not null, "nikname" varchar not null, "email" varchar not null, "password" varchar not null, "remember_token" varchar, "created_at" datetime, "updated_at" datetime);

-- ----------------------------
-- Records of usuario
-- ----------------------------

-- ----------------------------
-- Indexes structure for table failed_jobs
-- ----------------------------
CREATE UNIQUE INDEX "main"."failed_jobs_uuid_unique"
ON "failed_jobs" ("uuid" ASC);

-- ----------------------------
-- Indexes structure for table personal_access_tokens
-- ----------------------------
CREATE UNIQUE INDEX "main"."personal_access_tokens_token_unique"
ON "personal_access_tokens" ("token" ASC);
CREATE INDEX "main"."personal_access_tokens_tokenable_type_tokenable_id_index"
ON "personal_access_tokens" ("tokenable_type" ASC, "tokenable_id" ASC);

-- ----------------------------
-- Indexes structure for table sessions
-- ----------------------------
CREATE UNIQUE INDEX "main"."sessions_id_unique"
ON "sessions" ("id" ASC);

-- ----------------------------
-- Indexes structure for table users
-- ----------------------------
CREATE UNIQUE INDEX "main"."users_email_unique"
ON "users" ("email" ASC);

-- ----------------------------
-- Indexes structure for table usuario
-- ----------------------------
CREATE UNIQUE INDEX "main"."usuario_email_unique"
ON "usuario" ("email" ASC);
