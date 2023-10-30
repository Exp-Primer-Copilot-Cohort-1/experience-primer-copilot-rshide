function skillsMember() {
    var skillsMember = document.getElementById("skills-member");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueLength = skillsMemberValue.length;
    var skillsMemberValueLengthRemain = 200 - skillsMemberValueLength;
    var skillsMemberValueLengthRemainText = document.getElementById("skills-member-length-remain-text");
    skillsMemberValueLengthRemainText.innerHTML = skillsMemberValueLengthRemain;
}