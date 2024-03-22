setOnClick(eById("close-preapproval"), () => {
  const preapprovalModal = eById("preapproval-modal");
  preapprovalModal.classList.remove("active");
});
