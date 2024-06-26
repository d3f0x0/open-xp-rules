{
  "subject": "account",
  "action": "login",
  "object": "system",
  "status": "failure",
  "category.generic": "Operating System",
  "category.high": "Access Management",
  "category.low": "Communication",
  "chain_id": "317",
  "dst.ip": "10.1.76.35",
  "event_src.category": "Operating system",
  "event_src.ip": "10.1.76.35",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_user_auth",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "logon_auth_method": "remote",
  "logon_service": "ssh",
  "msgid": "USER_AUTH",
  "object.process.fullpath": "/usr/sbin/sshd",
  "object.process.id": "2130",
  "object.process.name": "sshd",
  "object.process.path": "/usr/sbin/",
  "reason": "maxtries exceeded",
  "src.ip": "192.168.206.1",
  "subject.account.name": "jr",
  "time": "2020-10-15T08:45:35.000Z"
}