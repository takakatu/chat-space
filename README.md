# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## DBの設計図です。レビューお願いします。

## users テーブル

|Colum|Type|Options|
|-----|----|-------|
|name|string|null: false|
|email|text|null: false|
|password|text|null: false|

### Association
 - has_many :users_groups
 - has_many :messages
 - has_many :groups, through: :users_groups

## users_groups テーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups テーブル

|Colum|Type|Options|
|-----|----|-------|
|name|string|null: false|

### Association
 - has_many :users_groups
 - has_many :messages
 - has_many :users, through: :users_groups

## messages テーブル

|Colum|Type|Options|
|-----|----|-------|
|text|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
 - belong_to :user
 - belong_to :group