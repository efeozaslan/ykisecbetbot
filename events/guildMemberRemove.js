module.exports = member => {
  let guild = member.guild;
  member.send('niye gittin üzdün ykisecbet sunucu olarak ?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
