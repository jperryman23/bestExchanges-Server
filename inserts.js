t_user
t_instance
t_module
t_module_text
t_module_version
t_module_download
t_module_review
t_script
t_sentence
t_sentence_vote
Here is the final create table script :

CREATE TABLE t_user (
id uuid DEFAULT uuid_generate_v4() NOT NULL,
name character varying NOT NULL,
email character varying NOT NULL,
password character varying NOT NULL,
active boolean DEFAULT false NOT NULL,
last_connected timestamp NOT NULL default now(),
created_at timestamp NOT NULL default now(),
updated_at timestamp NOT NULL default now(),
is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_user ADD CONSTRAINT t_user_pkey PRIMARY KEY (id);

CREATE TABLE t_module (
id uuid DEFAULT uuid_generate_v4() NOT NULL,
user_id uuid NOT NULL,
name character varying NOT NULL,
img character varying NOT NULL,
url character varying NOT NULL,
slug character varying NOT NULL,
online boolean DEFAULT false NOT NULL,
min_gladys_version integer NOT NULL,
max_gladys_version integer NOT NULL,
created_at timestamp NOT NULL default now(),
updated_at timestamp NOT NULL default now(),
is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_module ADD CONSTRAINT t_module_pkey PRIMARY KEY (id);
